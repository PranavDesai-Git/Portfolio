<script>
    import Fa from "svelte-fa";
    import { faArrowLeft, faTerminal } from "@fortawesome/free-solid-svg-icons";
    import { appState } from "../../lib/store.svelte.js";
</script>

<div class="page-container">
    <div class="page-body">
        <button class="back-btn" onclick={() => appState.activeTab = "01-HomePage"}>
            <Fa icon={faArrowLeft} /> Back to Home
        </button>

        <header class="project-header">
            <h1 class="project-title"><Fa icon={faTerminal} /> qLog</h1>
            <p class="project-subtitle">Local AI-Driven Project Management TUI</p>
            <div class="tags">
                <span class="tag">Go</span>
                <span class="tag">Bubble Tea</span>
                <span class="tag">Lipgloss</span>
                <span class="tag">Ollama</span>
            </div>
        </header>

        <section class="content-section">
            <h2>System Architecture</h2>
            <p>qLog is a terminal user interface (TUI) built in Go utilizing the Charm Bubble Tea framework. It serves as a rapid project management tool entirely driven by local AI models via Ollama.</p>
            <ul>
                <li><strong>TUI Framework:</strong> Uses <code>bubbletea</code> for state management and event loops, and <code>lipgloss</code> for terminal styling.</li>
                <li><strong>Local Inference:</strong> Integrates a dual-model pipeline locally (Qwen & Gemma) without relying on external cloud APIs, ensuring absolute privacy.</li>
                <li><strong>Automated Processing:</strong> Generates concise agenda summaries and parses project logs intelligently.</li>
            </ul>

            <h2>Technical Challenges</h2>
            <p>The core challenge was orchestrating non-blocking API calls to the local Ollama daemon within the TUI's event loop to prevent UI freezing. Handling variable-length AI outputs and stream rendering them in a constrained terminal space also required careful layout management.</p>

            <a href="https://github.com/PranavDesai-Git/qlog" target="_blank" rel="noreferrer" class="repo-btn">View Repository</a>
        </section>
    </div>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: var(--text-main);
        font-family: var(--font-sans);
        min-height: 100vh;
    }

    .page-body {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding: 48px;
        box-sizing: border-box;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }

    .back-btn {
        align-self: flex-start;
        background: transparent;
        color: var(--text-secondary);
        border: 1px solid var(--border-subtle);
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-mono);
        transition: all 0.2s;
    }

    .back-btn:hover {
        color: var(--text-inverse);
        background: var(--text-main);
        border-color: var(--text-main);
    }

    .project-header {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-bottom: 1px dashed var(--border-subtle);
        padding-bottom: 32px;
    }

    .project-title {
        font-size: 2.5rem;
        font-family: var(--font-heading);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 16px;
        color: var(--text-main);
    }

    .project-subtitle {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin: 0;
    }

    .tags {
        display: flex;
        gap: 8px;
        margin-top: 8px;
    }

    .tag {
        background: rgba(255, 255, 255, 0.05);
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 0.8rem;
        color: var(--text-secondary);
    }

    .content-section {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .content-section h2 {
        font-size: 1.5rem;
        margin: 0;
        color: var(--text-main);
        border-left: 4px solid var(--text-secondary);
        padding-left: 12px;
    }

    .content-section p, .content-section ul {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--text-secondary);
        margin: 0;
    }

    .content-section ul {
        padding-left: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .content-section li::marker {
        color: var(--text-muted);
    }

    .content-section strong {
        color: var(--text-main);
    }

    .repo-btn {
        margin-top: 24px;
        align-self: flex-start;
        font-family: var(--font-mono);
        font-size: 0.9rem;
        font-weight: 600;
        color: #000000;
        background-color: #EDEDED;
        border: 1px solid #EDEDED;
        padding: 10px 16px;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .repo-btn:hover {
        background-color: #FFFFFF;
        color: #000000;
        border-color: #FFFFFF;
    }

    @media (max-width: 768px) {
        .page-body {
            padding: 24px;
            gap: 32px;
        }
        .project-title {
            font-size: 1.8rem;
        }
        .project-header {
            padding-bottom: 24px;
        }
    }
</style>
