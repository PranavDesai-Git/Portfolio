function cleanDisplayName(name) {
    let clean = name.replace(/^\d+-/, "");
    if (clean.endsWith("Page")) {
        clean = clean.slice(0, -4);
    }
    return clean;
}

/**
 * Automatically generates a navigation tree structure from Vite's import.meta.glob file list.
 */
export function generateTabsFromFiles(pageModules) {
    const root = {};

    // 1. Parse file paths into a nested directory tree
    for (const path of Object.keys(pageModules)) {
        const cleanPath = path.replace("./pages/", "").replace(/\.(svelte|md)$/, "");
        const cleanTarget = cleanPath.split("/").map(cleanDisplayName).join("/");
        const parts = cleanPath.split("/");

        let current = root;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === parts.length - 1) {
                current._files = current._files || [];
                current._files.push({ name: part, target: cleanTarget });
            } else {
                current[part] = current[part] || {};
                current = current[part];
            }
        }
    }

    // 2. Convert directory tree into NavButton tab structure
    function buildNode(name, node, currentPath = "") {
        const children = [];
        const cleanName = cleanDisplayName(name);
        const folderPath = currentPath ? `${currentPath}/${cleanName}` : cleanName;

        // Add subdirectories
        for (const [key, childNode] of Object.entries(node)) {
            if (key !== "_files") {
                children.push(buildNode(key, childNode, folderPath));
            }
        }

        // Add files
        if (node._files) {
            for (const file of node._files) {
                const displayName = cleanDisplayName(file.name);

                children.push({
                    text: displayName,
                    name: displayName,
                    target: file.target
                });
            }
        }

        const groupName = cleanDisplayName(name);

        // Fallback defaultTarget to overview/index or first child target
        let defaultTarget = null;
        const overviewChild = children.find(c => typeof c.target === 'string' && (c.name.toLowerCase() === 'overview' || c.name.toLowerCase() === 'index'));
        if (overviewChild) {
            defaultTarget = overviewChild.target;
        } else if (children.length > 0) {
            const firstChild = children[0];
            defaultTarget = typeof firstChild.target === 'string' ? firstChild.target : firstChild.defaultTarget;
        }

        return {
            name: groupName,
            text: groupName,
            target: children,
            defaultTarget: defaultTarget,
            folderPath: folderPath
        };
    }

    const tabs = [];

    for (const [key, node] of Object.entries(root)) {
        if (key === "_files") {
            for (const file of node) {
                const displayName = cleanDisplayName(file.name);
                tabs.push({ name: displayName, text: displayName, target: file.target });
            }
        } else {
            tabs.push(buildNode(key, node, ""));
        }
    }

    return tabs;
}


/**
 * Merges auto-scanned directory tabs with user's YAML configuration.
 * YAML order dictates display order, and YAML properties override/add defaultTargets.
 */
export function mergeTabsWithYaml(autoTabs, yamlTabs) {
    if (!yamlTabs || !Array.isArray(yamlTabs) || yamlTabs.length === 0) {
        return autoTabs;
    }

    const autoMap = new Map();
    for (const tab of autoTabs) {
        const key = (tab.name || tab.text || tab.target).toLowerCase();
        autoMap.set(key, tab);
    }

    const result = [];

    for (const yTab of yamlTabs) {
        const yName = yTab.name || yTab.text || "";
        const key = yName.toLowerCase();
        const autoTab = autoMap.get(key);

        if (autoTab) {
            autoMap.delete(key);
            let mergedTarget = autoTab.target;

            if (Array.isArray(yTab.target) && Array.isArray(autoTab.target)) {
                mergedTarget = mergeTabsWithYaml(autoTab.target, yTab.target);
            } else if (yTab.target && typeof yTab.target === "string") {
                mergedTarget = yTab.target;
            }

            result.push({
                ...autoTab,
                name: yTab.name || autoTab.name,
                text: yTab.text || yTab.name || autoTab.text,
                defaultTarget: yTab.defaultTarget ?? autoTab.defaultTarget ?? null,
                target: mergedTarget,
                folderPath: autoTab.folderPath
            });
        } else {
            // Defined in YAML (custom menu entry or group)
            let target = yTab.target;
            if (Array.isArray(yTab.target)) {
                target = mergeTabsWithYaml([], yTab.target);
            }

            result.push({
                name: yTab.name || yTab.text,
                text: yTab.text || yTab.name,
                target: target,
                defaultTarget: yTab.defaultTarget ?? null,
                folderPath: yTab.folderPath
            });
        }
    }

    // Append any newly created auto-scanned tabs that are not yet listed in YAML
    for (const remainingTab of autoMap.values()) {
        result.push(remainingTab);
    }

    return result;
}
