<script>
    import Fa from "svelte-fa";
    import { faArrowLeft, faMicrochip } from "@fortawesome/free-solid-svg-icons";
    import { appState } from "../../lib/store.svelte.js";
</script>

<div class="page-container">
    <div class="page-body">
        <button class="back-btn" onclick={() => appState.activeTab = "01-HomePage"}>
            <Fa icon={faArrowLeft} /> Back to Home
        </button>

        <header class="project-header">
            <h1 class="project-title"><Fa icon={faMicrochip} /> 16-Bit Assembler</h1>
            <p class="project-subtitle">Low-Level Systems & Binary I/O</p>
            <div class="tags">
                <span class="tag">C</span>
                <span class="tag">Assembly</span>
                <span class="tag">Binary I/O</span>
            </div>
        </header>

        <section class="content-section">
            <h2>System Architecture</h2>
            <p>This project is a lightweight, single-pass assembler written entirely in C for a custom 16-bit instruction set architecture (ISA).</p>
            <ul>
                <li><strong>Compilation Pipeline:</strong> Tokenizes text assembly mnemonics (like <code>MOV</code>, <code>ADD</code>, <code>JMP</code>) and parses them into an abstract representation.</li>
                <li><strong>Lookup Tables:</strong> Uses a hardcoded single-pass lookup table to map opcodes and registers to binary equivalents in constant time.</li>
                <li><strong>Binary Generation:</strong> Directly handles binary I/O, writing structured executable machine code bit-by-bit to an output file.</li>
            </ul>

            <h2>Technical Challenges</h2>
            <p>Translating textual assembly strings into exact binary formats requires precise bitwise manipulation in C. Managing memory safely during tokenization (without memory leaks) and correctly resolving memory addresses/labels in a single pass were the core hurdles of this project.</p>

            <a href="https://github.com/PranavDesai-Git" target="_blank" rel="noreferrer" class="repo-btn">View Github Profile</a>
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
