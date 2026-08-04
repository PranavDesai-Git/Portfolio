<script>
    import { appState } from "./store.svelte.js";
    let { text = "NavButton", target = "Home" } = $props();
</script>

<button
    type="button"
    class="nav-btn"
    class:active={appState.activeTab === target}
    onclick={() => {
        appState.activeTab = target;
    }}
>
    {text}
</button>

<style>
    .nav-btn {
        width: 100%;
        padding: 0.75rem 1.25rem;
        text-align: left;
        background: transparent;
        color: var(--text);
        border: 1px solid transparent;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    .nav-btn:hover {
        background-color: var(--code-bg);
        color: var(--text-h);
    }

    .nav-btn.active {
        background-color: var(--active-bg);
        color: var(--text-h);
    }
</style>
