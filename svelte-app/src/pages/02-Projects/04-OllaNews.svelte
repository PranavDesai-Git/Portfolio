<script>
    import Fa from "svelte-fa";
    import { faArrowLeft, faGlobe } from "@fortawesome/free-solid-svg-icons";
    import { appState } from "../../lib/store.svelte.js";
</script>

<div class="page-container">
    <div class="page-body">
        <button class="back-btn" onclick={() => appState.activeTab = "01-HomePage"}>
            <Fa icon={faArrowLeft} /> Back to Home
        </button>

        <header class="project-header">
            <h1 class="project-title"><Fa icon={faGlobe} /> OllaNews</h1>
            <p class="project-subtitle">Local AI News Aggregator & Pipeline</p>
            <div class="tags">
                <span class="tag">Python</span>
                <span class="tag">Flask</span>
                <span class="tag">Ollama</span>
                <span class="tag">JavaScript</span>
            </div>
        </header>

        <section class="content-section">
            <h2>System Architecture</h2>
            <p>OllaNews is a robust data pipeline that fetches live news feeds and leverages local LLMs for immediate summarization, reducing cognitive overload without paying API costs.</p>
            <ul>
                <li><strong>Aggregation:</strong> Scrapes and aggregates RSS feeds from Google News.</li>
                <li><strong>Extraction:</strong> Uses Trafilatura to robustly parse raw HTML and extract the main article content, ignoring ads and boilerplate.</li>
                <li><strong>Summarization:</strong> Pipes the raw text into local Ollama models (via Python bindings) to generate concise single-paragraph summaries.</li>
                <li><strong>Backend:</strong> Powered by a lightweight Flask REST API, serving data to the frontend asynchronously.</li>
            </ul>

            <h2>Technical Challenges</h2>
            <p>Processing hundreds of articles efficiently on consumer hardware required asynchronous task queues and intelligent batching. Parsing HTML reliably across vastly different news site architectures was solved by leveraging robust NLP extraction tools like Trafilatura.</p>

            <a href="https://github.com/PranavDesai-Git/ollanews" target="_blank" rel="noreferrer" class="repo-btn">View Repository</a>
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
