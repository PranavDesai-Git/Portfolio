<script>
    import NavButton from "./lib/NavButton.svelte";
    import { appState } from "./lib/store.svelte.js";

    const tabs = [
        { name: "Home", target: "Home" },
        {
            name: "Projects",
            target: [
                { text: "Project 0", target: "Project0" },
                { text: "Project 1", target: "Project1" },
            ],
        },
        { name: "About", target: "About" },
    ];
</script>

<main class="layout">
    <section class="sidebar">
        <nav class="nav-bar">
            <div class="scroll-container-v">
                {#each tabs as tab}
                    <NavButton text={tab.name} target={tab.target} />
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

    /* Mobile Responsive Layout (Screens <= 768px) */
    @media (max-width: 768px) {
        .layout {
            flex-direction: column-reverse;
        }

        .sidebar {
            width: 100%;
            height: auto;
            max-height: 200px;
            border-right: none;
            border-top: 1px solid var(--border);
        }

        .content {
            padding: 1.5rem;
        }

        .scroll-container-v {
            padding: 0.75rem;
        }
    }
</style>

