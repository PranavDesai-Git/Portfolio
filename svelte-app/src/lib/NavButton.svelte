<script>
    import { appState } from "./store.svelte.js";
    import NavButton from "./NavButton.svelte";
    import Fa from "svelte-fa";
    import { faFolder, faFileLines, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
            <span class="btn-label-group">
                <Fa icon={faFolder} size="0.85x" class="nav-icon" />
                <span class="btn-label">{text}</span>
            </span>
            <span class="arrow {isOpen ? 'open' : ''}">
                <Fa icon={faChevronRight} size="0.75x" />
            </span>
        </button>
        {#if isOpen}
            <div class="sub-menu" transition:slide={{ duration: 150 }}>
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
        <span class="btn-label-group">
            <Fa icon={faFileLines} size="0.85x" class="nav-icon" />
            <span class="btn-label">{text}</span>
        </span>
    </button>
{/if}

<style>
    .nav-btn {
        width: 100%;
        padding: 0.55rem 0.85rem;
        min-height: 44px;
        text-align: left;
        background: transparent;
        color: var(--text-secondary);
        border: none;
        border-radius: 4px;
        font-family: var(--mono);
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-btn:hover {
        background-color: var(--bg-surface-hover);
        color: var(--text-main);
    }

    .nav-btn.active {
        background-color: var(--accent);
        color: #000000;
        font-weight: 600;
    }

    .btn-label-group {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        overflow: hidden;
    }

    .btn-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .sub-menu {
        padding-left: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        border-left: 1px dashed var(--border-subtle);
        margin-left: 0.5rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

    .arrow {
        color: var(--text-muted);
        transition: transform 0.15s ease;
        display: inline-flex;
    }

    .arrow.open {
        transform: rotate(90deg);
        color: var(--alabaster-grey);
    }

    .nav-btn.active .arrow,
    .nav-btn.active :global(.nav-icon) {
        color: #000000;
    }
</style>
