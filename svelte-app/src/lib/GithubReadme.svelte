<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    import DOMPurify from "dompurify";

    let { repo } = $props();

    let readmeHtml = $state("<p>Loading README...</p>");
    let error = $state(null);

    onMount(async () => {
        try {
            let res = await fetch(`https://raw.githubusercontent.com/${repo}/main/README.md`);
            if (!res.ok) {
                res = await fetch(`https://raw.githubusercontent.com/${repo}/master/README.md`);
            }
            
            if (res.ok) {
                const text = await res.text();
                // Ensure marked does not conflict with our theme
                const parsed = await marked.parse(text);
                readmeHtml = DOMPurify.sanitize(parsed);
            } else {
                error = "Could not fetch README for " + repo;
            }
        } catch (e) {
            error = "Error fetching README.";
            console.error(e);
        }
    });
</script>

<div class="readme-container">
    {#if error}
        <p class="error">{error}</p>
    {:else}
        <div class="markdown-body">
            {@html readmeHtml}
        </div>
    {/if}
</div>

<style>
    .readme-container {
        padding: 24px;
        color: #EDEDED;
        max-width: 900px;
        margin: 0 auto;
    }

    .error {
        color: #ef4444;
        font-family: var(--font-mono);
    }

    /* Simple markdown styling */
    :global(.markdown-body) {
        font-family: var(--font-sans);
        line-height: 1.6;
        color: #EDEDED;
    }

    :global(.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6) {
        font-family: var(--font-heading);
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-bottom: 0.3em;
    }

    :global(.markdown-body h1) { font-size: 2em; }
    :global(.markdown-body h2) { font-size: 1.5em; }

    :global(.markdown-body a) {
        color: var(--stormy-teal);
        text-decoration: none;
    }

    :global(.markdown-body a:hover) {
        text-decoration: underline;
    }

    :global(.markdown-body pre) {
        background-color: rgba(255,255,255,0.05);
        padding: 16px;
        border-radius: 6px;
        overflow: auto;
        font-family: var(--font-mono);
        font-size: 0.9em;
    }

    :global(.markdown-body code) {
        background-color: rgba(255,255,255,0.05);
        padding: 2px 4px;
        border-radius: 4px;
        font-family: var(--font-mono);
        font-size: 0.9em;
    }

    :global(.markdown-body img) {
        max-width: 100%;
        box-sizing: content-box;
    }
</style>
