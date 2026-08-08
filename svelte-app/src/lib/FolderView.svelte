<script>
    import { appState } from "./store.svelte.js";

    let { folderPath, items } = $props();

    function navigateTo(targetPath) {
        appState.activeTab = targetPath;
    }

    // Format current date roughly like ls -la
    const d = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${monthNames[d.getMonth()]} ${d.getDate().toString().padStart(2, ' ')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
</script>

<div class="folder-view-container">
    <div class="terminal-header">
        <span class="prompt">guest@portfolio</span>:<span class="path">~/{folderPath}</span>$ ls -la
    </div>
    
    <div class="terminal-output">
        <div class="ls-line">total {items.length * 4}</div>
        <div class="ls-line" onclick={() => { /* Could navigate up, but let's keep it simple */ }}>
            <span class="perms">drwxr-xr-x</span> 2 guest guest 4096 {dateStr} <span class="name folder">.</span>
        </div>
        <div class="ls-line" onclick={() => { /* Could navigate up */ }}>
            <span class="perms">drwxr-xr-x</span> 3 guest guest 4096 {dateStr} <span class="name folder">..</span>
        </div>
        
        {#each items as item}
            {@const isDir = Array.isArray(item.target)}
            <div class="ls-line clickable" onclick={() => navigateTo(isDir ? item.folderPath : item.target)}>
                <span class="perms">{isDir ? 'drwxr-xr-x' : '-rw-r--r--'}</span> 1 guest guest {isDir ? '4096' : (Math.floor(Math.random() * 5000) + 1024)} {dateStr} <span class="name {isDir ? 'folder' : 'file'}">{item.name}{isDir ? '' : ''}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    .folder-view-container {
        padding: 48px;
        max-width: 900px;
        margin: 0 auto;
        color: #A3A3A3;
        font-family: var(--font-mono);
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .terminal-header {
        margin-bottom: 24px;
        color: #EDEDED;
    }

    .prompt {
        color: var(--stormy-teal);
        font-weight: 600;
    }

    .path {
        color: #4da6ff;
        font-weight: 600;
    }

    .terminal-output {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .ls-line {
        display: flex;
        gap: 16px;
        padding: 4px 8px;
        border-radius: 4px;
        transition: background-color 0.15s ease;
        white-space: pre;
    }

    .ls-line.clickable {
        cursor: pointer;
    }

    .ls-line.clickable:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    .perms {
        color: #A3A3A3;
    }

    .name {
        font-weight: 600;
    }

    .name.folder {
        color: #4da6ff; /* Directory color */
    }

    .name.file {
        color: #EDEDED; /* Regular file color */
    }

    @media (max-width: 768px) {
        .folder-view-container {
            padding: 24px;
            font-size: 0.85rem;
            overflow-x: auto;
        }
    }
</style>
