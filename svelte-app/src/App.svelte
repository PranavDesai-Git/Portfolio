<script>
    import NavButton from "./lib/NavButton.svelte";
    import { appState } from "./lib/store.svelte.js";

    const tabs = [
        { name: "Home", id: "home" },
        { name: "Projects", id: "projects" },
        { name: "About", id: "about" },
        { name: "Contact Me", id: "contactme" },
        { name: "Blog", id: "blog" },
    ];
</script>

<main>
    <section id="center">
        <!-- Horizontal Container -->
        <nav class="nav-bar">
            {#each tabs as tab}
                <NavButton text={tab.name} target={tab.id} />
            {/each}
        </nav>

        <h1>Active Tab: {appState.activeTab}</h1>
    </section>
</main>

<style>
    /* Horizontal Container Styling */
    .nav-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 0.5rem 1rem;
        background: var(--code-bg, rgba(255, 255, 255, 0.05));
        border: 1px solid var(--border);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }
</style>
