<script>
    import NavButton from "./lib/NavButton.svelte";
    import { appState } from "./lib/store.svelte.js";
    import {
        generateTabsFromFiles,
        mergeTabsWithYaml,
    } from "./lib/navigation.js";
    import yamlTabs from "./lib/navigation.yaml";
    import { fade, fly } from "svelte/transition";
    import FolderView from "./lib/FolderView.svelte";
    import HomePage from "./pages/01-HomePage.svelte";

    const pageModules = import.meta.glob("./pages/**/*.{svelte,md}", {
        eager: true,
    });

    const autoTabs = generateTabsFromFiles(pageModules);
    const tabs = mergeTabsWithYaml(autoTabs, yamlTabs);

    const pageComponents = {};
    for (const [path, module] of Object.entries(pageModules)) {
        const rawKey = path.replace("./pages/", "").replace(/\.(svelte|md)$/, "");
        const cleanKey = rawKey
            .split("/")
            .map((part) => {
                let clean = part.replace(/^\d+-/, "");
                if (clean.endsWith("Page")) clean = clean.slice(0, -4);
                return clean;
            })
            .join("/");

        pageComponents[cleanKey] = module.default;
        pageComponents[rawKey] = module.default;
    }

    import { onMount } from "svelte";
    
    function findFolderInfo(path, currentTabs) {
        if (!currentTabs) return null;
        for (const t of currentTabs) {
            if (t.folderPath === path) {
                return t;
            }
            if (Array.isArray(t.target)) {
                const sub = findFolderInfo(path, t.target);
                if (sub) return sub;
            }
        }
        return null;
    }

    let activeFolderInfo = $derived(findFolderInfo(appState.activeTab, tabs));
    let ActivePage = $derived(pageComponents[appState.activeTab] || HomePage);
    let isNavCollapsed = $state(false);

    onMount(() => {
        if (window.innerWidth <= 768) {
            isNavCollapsed = true;
        }

        const handlePopState = () => {
            let path = window.location.pathname;
            // Strip leading and trailing slashes
            path = path.replace(/^\/+|\/+$/g, '');
            if (path === '') {
                appState.activeTab = 'Home';
            } else {
                appState.activeTab = path;
            }
        };

        window.addEventListener('popstate', handlePopState);
        handlePopState(); // Trigger on initial load to support direct links

        return () => window.removeEventListener('popstate', handlePopState);
    });

    $effect(() => {
        const currentTab = appState.activeTab;
        const targetPath = currentTab === 'Home' ? '/' : `/${currentTab}`;
        
        if (window.location.pathname !== targetPath) {
            window.history.pushState(null, '', targetPath);
        }
    });
</script>

<main class="layout">
    <aside class="sidebar" class:collapsed={isNavCollapsed}>
        <div class="sidebar-header">
            <div 
                class="brand" 
                role="button" 
                tabindex="0" 
                onclick={() => { appState.activeTab = 'Home'; }}
                onkeydown={(e) => { if (e.key === 'Enter') appState.activeTab = 'Home'; }}
            >
                <span class="dot">●</span>
                <span class="brand-title">PORTFOLIO</span>
            </div>
            <button
                type="button"
                class="toggle-nav-btn"
                onclick={() => (isNavCollapsed = !isNavCollapsed)}
                aria-label="Toggle Navigation"
            >
                <span class="toggle-icon">{isNavCollapsed ? "▲ Menu" : "▼ Hide"}</span>
            </button>
        </div>

        <nav class="nav-bar">
            <div class="scroll-container-v">
                <div class="nav-section-title">// NAVIGATION</div>
                {#each tabs as tab}
                    <NavButton
                        text={tab.name}
                        target={tab.target}
                        defaultTarget={tab.defaultTarget}
                        folderPath={tab.folderPath}
                    />
                {/each}
            </div>
        </nav>
    </aside>

    <section class="content">
        {#key appState.activeTab}
            <div
                class="main-content"
                in:fly={{ y: 20, duration: 400, delay: 100 }}
                out:fade={{ duration: 150 }}
            >
                {#if activeFolderInfo}
                    <FolderView folderPath={activeFolderInfo.folderPath} items={activeFolderInfo.target} />
                {:else}
                    <ActivePage />
                {/if}
            </div>
        {/key}
    </section>
</main>

<style>
    .layout {
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        background-color: var(--bg-pitch);
    }

    .sidebar {
        width: 250px;
        flex-shrink: 0;
        height: 100%;
        border-right: 1px solid var(--border);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: var(--bg-pitch);
    }

    .sidebar-header {
        height: 48px;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--border);
        box-sizing: border-box;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-heading);
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: var(--text-secondary);
        cursor: pointer;
    }

    .brand .dot {
        font-size: 0.6rem;
        color: var(--accent);
    }

    .toggle-nav-btn {
        display: none;
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        font-family: var(--font-sans);
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
    }

    .toggle-nav-btn:hover {
        color: var(--text-main);
    }

    .content {
        flex: 1;
        height: 100%;
        padding: 0;
        box-sizing: border-box;
        text-align: left;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--bg-pitch);
        display: grid;
        min-width: 0;
    }

    .main-content {
        width: 100%;
        max-width: 100%;
        margin: 0;
        grid-area: 1 / 1;
        min-width: 0;
    }

    .nav-bar {
        width: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }

    .scroll-container-v {
        width: 100%;
        height: 100%;
        min-height: 0;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding: 0.85rem 0.5rem;
        box-sizing: border-box;
    }

    .nav-section-title {
        font-family: var(--font-heading);
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--text-muted);
        padding: 0.4rem 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        .layout {
            flex-direction: column;
        }

        .toggle-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0.5rem 0.85rem;
        }

        .sidebar {
            width: 100%;
            height: auto;
            max-height: 300px;
            flex-shrink: 0;
            border-right: none;
            border-bottom: 1px solid var(--border);
            transition: max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar.collapsed {
            max-height: 48px;
        }

        .content {
            padding: 0;
            flex: 1;
            min-height: 0;
        }
    }
</style>
