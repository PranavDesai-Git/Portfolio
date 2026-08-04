<script>
    import NavButton from "./lib/NavButton.svelte";
    import { appState } from "./lib/store.svelte.js";
    import {
        generateTabsFromFiles,
        mergeTabsWithYaml,
    } from "./lib/navigation.js";
    import yamlTabs from "./lib/navigation.yaml";
    import { fade, fly } from "svelte/transition";
    import HomePage from "./pages/01-HomePage.svelte";

    const pageModules = import.meta.glob("./pages/**/*.svelte", {
        eager: true,
    });

    const autoTabs = generateTabsFromFiles(pageModules);

    const tabs = mergeTabsWithYaml(autoTabs, yamlTabs);

    const pageComponents = {};
    for (const [path, module] of Object.entries(pageModules)) {
        const rawKey = path.replace("./pages/", "").replace(".svelte", "");
        const cleanKey = rawKey
            .split("/")
            .map((part) => {
                let clean = part.replace(/^\d+-/, "");
                if (clean.endsWith("Page")) clean = clean.slice(0, -4);
                return clean;
            })
            .join("/");

        pageComponents[cleanKey] = module.default;
        pageComponents[rawKey] = module.default; // Fallback for raw paths
    }

    let ActivePage = $derived(pageComponents[appState.activeTab] || HomePage);

    let isNavCollapsed = $state(false);
</script>

<main class="layout">
    <section class="sidebar" class:collapsed={isNavCollapsed}>
        <button
            type="button"
            class="toggle-nav-btn"
            onclick={() => (isNavCollapsed = !isNavCollapsed)}
            aria-label="Toggle Navigation"
        >
            <span class="toggle-icon"
                >{isNavCollapsed ? "▲ Menu" : "▼ Hide"}</span
            >
        </button>

        <nav class="nav-bar">
            <div class="scroll-container-v">
                {#each tabs as tab}
                    <NavButton
                        text={tab.name}
                        target={tab.target}
                        defaultTarget={tab.defaultTarget}
                    />
                {/each}
            </div>
        </nav>
    </section>

    <section class="content">
        {#key appState.activeTab}
            <div
                class="mainContent"
                in:fly={{ y: 15, duration: 250, delay: 120 }}
                out:fade={{ duration: 120 }}
            >
                <ActivePage />
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
    }

    .sidebar {
        width: 280px;
        flex-shrink: 0;
        height: 100%;
        border-right: 1px solid var(--border);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toggle-nav-btn {
        display: none;
        width: 100%;
        height: 36px;
        flex-shrink: 0;
        padding: 0.35rem;
        background: var(--code-bg);
        border: none;
        border-bottom: 1px solid var(--border);
        color: var(--text-h);
        cursor: pointer;
        font-size: 0.75rem;
        font-weight: 600;
        text-align: center;
        box-sizing: border-box;
    }

    .content {
        flex: 1;
        height: 100%;
        padding: 3rem;
        box-sizing: border-box;
        text-align: left;
        overflow-y: auto;
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
        gap: 0.5rem;
        padding: 1rem 0.5rem 1rem 1rem;
        box-sizing: border-box;
    }

    .scroll-container-v::-webkit-scrollbar {
        width: 0px;
    }

    @media (max-width: 768px) {
        .layout {
            flex-direction: column-reverse;
        }

        .toggle-nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sidebar {
            width: 100%;
            height: 350px;
            flex-shrink: 0;
            border-right: none;
            border-top: 1px solid var(--border);
        }

        .sidebar.collapsed {
            height: 36px;
        }

        .content {
            padding: 1.5rem;
            flex: 1;
            min-height: 0;
        }

        .scroll-container-v {
            padding: 0.75rem;
        }
    }
</style>
