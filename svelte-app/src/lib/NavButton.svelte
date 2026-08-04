<script>
    import { appState } from "./store.svelte.js";
    import NavButton from "./NavButton.svelte";

    let { text = "NavButton", target } = $props();
    let isOpen = $state(false);
</script>

{#if Array.isArray(target)}
    <div class="nav-group">
        <button
            type="button"
            class="nav-btn group-btn"
            onclick={() => (isOpen = !isOpen)}
        >
            <span>{text}</span>
            <span class="arrow">{isOpen ? "▾" : "▸"}</span>
        </button>
        {#if isOpen}
            <div class="sub-menu">
                {#each target as t}
                    <NavButton text={t.text} target={t.target} />
                {/each}
            </div>
        {/if}
    </div>
{:else}
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
{/if}

<style>
    .nav-btn {
        width: 100%;
        padding: 0.75rem 1.25rem;
        text-align: left;
        background: transparent;
        color: var(--text);
        border: 1px solid transparent;
        border-radius: 8px;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-btn:hover {
        background-color: var(--accent-bg);
        color: var(--text-h);
    }

    .nav-btn.active {
        background-color: var(--code-bg);
        color: var(--text-h);
        border-color: var(--border);
    }

    .sub-menu {
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
    }

    .arrow {
        font-size: 0.8rem;
        opacity: 0.7;
    }
</style>
