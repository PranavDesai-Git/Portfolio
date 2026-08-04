<script>
    import NavButton from "./lib/NavButton.svelte";
    import { appState } from "./lib/store.svelte.js";

    const tabs = [
        { name: "Home", id: "Home" },
        { name: "Projects", id: "Projects" },
        { name: "About", id: "About" },
        { name: "Contact Me", id: "ContactMe" },
        { name: "Blog", id: "Blog" },
    ];
</script>

<main class="layout">
    <section class="sidebar">
        <nav class="nav-bar">
            <div class="scroll-container-v">
                {#each { length: 10 }}
                    {#each tabs as tab}
                        <NavButton text={tab.name} target={tab.id} />
                    {/each}
                {/each}
            </div>
        </nav>
    </section>
    <section class="content">
        <div class="mainContent">
            <h1>{appState.activeTab}</h1>
        </div>
    </section>
</main>

<style>
    .layout {
        display: flex;
        height: 100vh;
        width: 100%;
    }

    .sidebar {
        width: 280px;
        flex-shrink: 0;
        height: 100%;
        border-right: 1px solid var(--border);
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
        height: 100%;
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
</style>
