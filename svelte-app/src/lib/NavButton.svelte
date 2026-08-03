<script>
    import { appState } from "./store.svelte";
    let { text = "NavButton", target = "Home" } = $props();
</script>

<button
    type="button"
    class="NavButton"
    onclick={() => {
        appState.activeTab = target;
    }}
>
    {text}
</button>
