<script>
    import { appState } from "./store.svelte.js";
    import NavButton from "./NavButton.svelte";
    import { slide } from "svelte/transition";

    let { text = "NavButton", target, defaultTarget } = $props();
    let isOpen = $state(false);
</script>

{#if Array.isArray(target)}
    <div class="nav-group">
        <button
            type="button"
            class="nav-btn group-btn"
            class:active={defaultTarget && appState.activeTab === defaultTarget}
            onclick={() => {
                if (defaultTarget != null) {
                    appState.activeTab = defaultTarget;
                }
                isOpen = !isOpen;
            }}
        >
            <span>{text}</span>
            <span class="arrow" class:open={isOpen}>▸</span>
        </button>
        {#if isOpen}
            <div class="sub-menu" transition:slide={{ duration: 200 }}>
                {#each target as t}
                    <NavButton
                        text={t.text}
                        target={t.target}
                        defaultTarget={t.defaultTarget}
                    />
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
        padding: 0.75rem 2rem;
        text-align: left;
        background: transparent;
        color: var(--text);
        border: 1px solid transparent;
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
    }

    .sub-menu {
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
    }

    .arrow {
        font-size: 0.8rem;
        opacity: 0.7;
        transition: transform 0.2s ease;
    }
    .arrow.open {
        transform: rotate(90deg);
    }
</style>
