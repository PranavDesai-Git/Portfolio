// scripts/reorder-pages.js
import fs from 'fs';
import path from 'path';

export function reorderDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    // Filter out hidden files
    const items = entries.filter(entry => {
        if (entry.name.startsWith('.')) return false;
        return entry.isDirectory() || entry.name.endsWith('.svelte');
    }).map(entry => {
        const fullPath = path.join(dirPath, entry.name);
        const stats = fs.statSync(fullPath);
        const match = entry.name.match(/^(\d+)-(.*)$/);

        return {
            name: entry.name,
            prefix: match ? parseInt(match[1], 10) : null,
            baseName: match ? match[2] : entry.name,
            fullPath,
            isDirectory: entry.isDirectory(),
            mtimeMs: stats.mtimeMs
        };
    });

    // Sort items: items with duplicate prefixes prioritize the most recently modified file
    items.sort((a, b) => {
        if (a.prefix !== null && b.prefix !== null) {
            if (a.prefix === b.prefix) {
                return b.mtimeMs - a.mtimeMs; // Newer file wins slot
            }
            return a.prefix - b.prefix;
        }
        if (a.prefix !== null) return -1;
        if (b.prefix !== null) return 1;
        return a.name.localeCompare(b.name);
    });

    // Re-assign clean sequential prefixes (01-, 02-, 03-...)
    let isChanged = false;
    items.forEach((item, index) => {
        const newPrefix = String(index + 1).padStart(2, '0');
        const newName = `${newPrefix}-${item.baseName}`;

        if (item.name !== newName) {
            const newFullPath = path.join(dirPath, newName);
            try {
                fs.renameSync(item.fullPath, newFullPath);
                console.log(`✨ [Auto-Reorder] Renamed: ${item.name} ➔ ${newName}`);
                isChanged = true;
            } catch (err) {
                console.error(`Failed to rename ${item.name}:`, err);
            }
        }

        // Recursively reorder subdirectories
        if (item.isDirectory) {
            const currentSubPath = item.name === newName ? item.fullPath : path.join(dirPath, newName);
            reorderDirectory(currentSubPath);
        }
    });

    return isChanged;
}

// Custom Vite plugin to watch src/pages/ live during dev
export function pageReorderVitePlugin() {
    let isRenaming = false;

    return {
        name: 'vite-plugin-page-reorder',
        configureServer(server) {
            const pagesDir = path.resolve('src/pages');

            const handleFileChange = (filePath) => {
                if (isRenaming) return;
                if (filePath.startsWith(pagesDir)) {
                    isRenaming = true;
                    setTimeout(() => {
                        reorderDirectory(pagesDir);
                        isRenaming = false;
                    }, 100);
                }
            };

            server.watcher.on('add', handleFileChange);
            server.watcher.on('unlink', handleFileChange);
        }
    };
}
