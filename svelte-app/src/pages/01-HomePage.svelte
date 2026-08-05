<script>
    import Fa from "svelte-fa";
    import {
        faLocationDot,
        faEnvelope,
        faFileLines,
        faLayerGroup,
        faCode,
        faWrench,
        faCodeBranch,
        faTerminal,
        faGlobe,
        faCamera,
        faMicrochip,
        faBriefcase,
        faUsers,
        faArrowRight,
    } from "@fortawesome/free-solid-svg-icons";
    import {
        faGithub,
        faLinkedinIn,
        faXTwitter,
    } from "@fortawesome/free-brands-svg-icons";
    import { appState } from "../lib/store.svelte.js";
</script>

<div class="page-container">
    <!-- Hero Section -->
    <header class="hero">
        <div class="name-row">
            <h1 class="name-title">Pranav Desai</h1>
        </div>
        <p class="role-subtitle">Networking | Systems | Backend Engineer</p>

        <div class="meta-grid">
            <div class="meta-item">
                <Fa icon={faLocationDot} size="0.9x" class="meta-icon" />
                <span class="meta-label">Location:</span>
                <span class="meta-val">Hyderabad, India</span>
            </div>
            <div class="meta-item">
                <Fa icon={faEnvelope} size="0.9x" class="meta-icon" />
                <span class="meta-label">Email:</span>
                <a
                    href="mailto:contact.pranavdesai@gmail.com"
                    class="meta-val link">contact.pranavdesai@gmail.com</a
                >
            </div>
            <div class="meta-item">
                <span class="meta-label">Socials:</span>
                <span class="meta-val links-group">
                    <a
                        href="https://github.com/PranavDesai-Git"
                        target="_blank"
                        rel="noreferrer"
                        class="link icon-btn"
                    >
                        <Fa icon={faGithub} size="0.85x" /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranav-desai-542961385/"
                        target="_blank"
                        rel="noreferrer"
                        class="link icon-btn"
                    >
                        <Fa icon={faLinkedinIn} size="0.85x" /> LinkedIn
                    </a>
                    <a
                        href="https://x.com/prnvdsi"
                        target="_blank"
                        rel="noreferrer"
                        class="link icon-btn"
                    >
                        <Fa icon={faXTwitter} size="0.85x" /> X
                    </a>
                </span>
            </div>
        </div>
    </header>

    <!-- Summary -->
    <section class="section summary-section">
        <h2 class="section-heading">
            <Fa icon={faFileLines} size="1x" class="heading-icon" /> // OVERVIEW
        </h2>
        <div class="card summary-card">
            <p>
                Computer Science and Engineering student (2nd year). Building
                low-level systems, Git engines, network protocols, local AI
                pipelines, and compilers. Programming since age 12, starting
                with game development in GDScript and expanding into Rust, Go,
                C, and Assembly.
            </p>
        </div>
    </section>

    <!-- Tech Stack Matrix -->
    <section class="section skills-section">
        <h2 class="section-heading">
            <Fa icon={faLayerGroup} size="1x" class="heading-icon" /> // TECH STACK
        </h2>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="category-name">
                    <Fa icon={faCode} size="0.9x" class="cat-icon" /> LANGUAGES
                </div>
                <div class="tag-list">
                    <span class="tag">Go</span>
                    <span class="tag">Rust</span>
                    <span class="tag">C</span>
                    <span class="tag">C++</span>
                    <span class="tag">Assembly</span>
                    <span class="tag">Kotlin</span>
                    <span class="tag">Python</span>
                    <span class="tag">GDScript</span>
                </div>
            </div>
            <div class="skill-category">
                <div class="category-name">
                    <Fa icon={faLayerGroup} size="0.9x" class="cat-icon" /> FRAMEWORKS
                    & LIBS
                </div>
                <div class="tag-list">
                    <span class="tag">Reqwest</span>
                    <span class="tag">Bubble Tea</span>
                    <span class="tag">Lipgloss</span>
                    <span class="tag">Jetpack Compose</span>
                    <span class="tag">Flask</span>
                    <span class="tag">Godot</span>
                </div>
            </div>
            <div class="skill-category">
                <div class="category-name">
                    <Fa icon={faWrench} size="0.9x" class="cat-icon" /> TOOLS & INFRA
                </div>
                <div class="tag-list">
                    <span class="tag">Git</span>
                    <span class="tag">Linux / POSIX</span>
                    <span class="tag">Ollama</span>
                    <span class="tag">REST APIs</span>
                    <span class="tag">CameraX</span>
                    <span class="tag">Trafilatura</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section class="section projects-section">
        <h2 class="section-heading">
            <Fa icon={faCode} size="1x" class="heading-icon" /> // FEATURED PROJECTS
        </h2>
        <div class="cards-list">
            <!-- Rugit -->
            <article class="card project-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faCodeBranch} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="project-title">Rugit</h3>
                            <span class="project-sub"
                                >Custom Git Version Control Engine</span
                            >
                        </div>
                    </div>
                </div>
                <p class="teaser-text">
                    Custom version control engine built in Rust. Replicates
                    Git's plumbing architecture, SHA-1/Zlib object storage,
                    binary <code>.git/index</code> staging parser, and Git Smart
                    HTTP wire protocol.
                </p>
                <div class="card-footer">
                    <div class="project-tags">
                        <span class="mini-tag">Rust</span>
                        <span class="mini-tag">Reqwest</span>
                        <span class="mini-tag">Flate2</span>
                        <span class="mini-tag">SHA-1</span>
                    </div>
                    <button
                        type="button"
                        class="view-btn"
                        onclick={() => (appState.activeTab = "projects/Rugit")}
                    >
                        View Spec <Fa icon={faArrowRight} size="0.8x" />
                    </button>
                </div>
            </article>

            <!-- qLog -->
            <article class="card project-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faTerminal} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="project-title">qLog</h3>
                            <span class="project-sub"
                                >Local AI-Driven Project Management TUI</span
                            >
                        </div>
                    </div>
                </div>
                <p class="teaser-text">
                    Terminal user interface built in Go using Charm Bubble Tea.
                    Integrates a local dual-model AI pipeline via Ollama (Qwen &
                    Gemma) for automated agenda summary generation.
                </p>
                <div class="card-footer">
                    <div class="project-tags">
                        <span class="mini-tag">Go</span>
                        <span class="mini-tag">Bubble Tea</span>
                        <span class="mini-tag">Lipgloss</span>
                        <span class="mini-tag">Ollama</span>
                    </div>
                    <button
                        type="button"
                        class="view-btn"
                        onclick={() => (appState.activeTab = "projects/qLog")}
                    >
                        View Spec <Fa icon={faArrowRight} size="0.8x" />
                    </button>
                </div>
            </article>

            <!-- OllaNews -->
            <article class="card project-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faGlobe} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="project-title">OllaNews</h3>
                            <span class="project-sub"
                                >Local AI News Aggregator & Pipeline</span
                            >
                        </div>
                    </div>
                </div>
                <p class="teaser-text">
                    Data pipeline built in Python/Flask to aggregate Google News
                    feeds, extract raw HTML using Trafilatura, and generate
                    single-paragraph article summaries locally via Ollama.
                </p>
                <div class="card-footer">
                    <div class="project-tags">
                        <span class="mini-tag">Python</span>
                        <span class="mini-tag">Flask</span>
                        <span class="mini-tag">Ollama</span>
                        <span class="mini-tag">JavaScript</span>
                    </div>
                    <button
                        type="button"
                        class="view-btn"
                        onclick={() =>
                            (appState.activeTab = "projects/OllaNews")}
                    >
                        View Spec <Fa icon={faArrowRight} size="0.8x" />
                    </button>
                </div>
            </article>

            <!-- Wimp -->
            <article class="card project-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faCamera} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="project-title">Wimp</h3>
                            <span class="project-sub"
                                >Android Botanical Vision Application</span
                            >
                        </div>
                    </div>
                </div>
                <p class="teaser-text">
                    Native Android app in Kotlin using Jetpack Compose and
                    CameraX to process raw YUV camera frame bytes for real-time
                    luminance tracking and plant taxonomy identification.
                </p>
                <div class="card-footer">
                    <div class="project-tags">
                        <span class="mini-tag">Kotlin</span>
                        <span class="mini-tag">Jetpack Compose</span>
                        <span class="mini-tag">CameraX</span>
                        <span class="mini-tag">Coroutines</span>
                    </div>
                    <button
                        type="button"
                        class="view-btn"
                        onclick={() => (appState.activeTab = "projects/Wimp")}
                    >
                        View Spec <Fa icon={faArrowRight} size="0.8x" />
                    </button>
                </div>
            </article>

            <!-- 16-Bit Assembler -->
            <article class="card project-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faMicrochip} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="project-title">
                                Custom 16-Bit Assembler
                            </h3>
                            <span class="project-sub"
                                >Low-Level Systems & Binary I/O</span
                            >
                        </div>
                    </div>
                </div>
                <p class="teaser-text">
                    Lightweight assembler written in C. Compiles text assembly
                    mnemonics into executable binary machine code for a custom
                    42-instruction architecture using a single-pass lookup
                    table.
                </p>
                <div class="card-footer">
                    <div class="project-tags">
                        <span class="mini-tag">C</span>
                        <span class="mini-tag">Assembly</span>
                        <span class="mini-tag">Binary I/O</span>
                    </div>
                    <button
                        type="button"
                        class="view-btn"
                        onclick={() =>
                            (appState.activeTab = "projects/Assembler")}
                    >
                        View Spec <Fa icon={faArrowRight} size="0.8x" />
                    </button>
                </div>
            </article>
        </div>
    </section>

    <!-- Experience -->
    <section class="section experience-section">
        <h2 class="section-heading">
            <Fa icon={faBriefcase} size="1x" class="heading-icon" /> // EXPERIENCE
        </h2>
        <div class="cards-list">
            <!-- Darkcity Atelier -->
            <article class="card exp-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faBriefcase} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="exp-role">Game Development Intern</h3>
                            <div class="exp-company">Darkcity Atelier</div>
                        </div>
                    </div>
                    <span class="exp-date">Feb 2026 – May 2026</span>
                </div>
                <ul class="bullet-list">
                    <li>
                        Sole engineer for a native Android mobile game, writing
                        10k+ lines of GDScript across 5 core gameplay systems.
                    </li>
                    <li>
                        Optimized touch-input and game physics to achieve 120
                        FPS across 15+ Android test devices.
                    </li>
                </ul>
            </article>

            <!-- G Electra Software Club -->
            <article class="card exp-card">
                <div class="card-header">
                    <div class="title-with-icon">
                        <Fa icon={faUsers} size="1.2x" class="proj-icon" />
                        <div>
                            <h3 class="exp-role">Software Club Lead</h3>
                            <div class="exp-company">
                                G Electra Software Club
                            </div>
                        </div>
                    </div>
                    <span class="exp-date">Jul 2025 – Present</span>
                </div>
                <ul class="bullet-list">
                    <li>
                        Led engineering team across 14 software releases over 14
                        months (full-stack web, Android, desktop).
                    </li>
                    <li>
                        Managed 2-week agile sprint cycles, code reviews, and
                        project scope design.
                    </li>
                </ul>
            </article>
        </div>
    </section>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        padding-bottom: 3rem;
    }

    /* Hero Styling */
    .hero {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border-bottom: 1px solid var(--border-subtle);
        padding-bottom: 1.75rem;
    }

    .name-row {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .name-title {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.1;
        color: var(--text-main);
        margin: 0;
    }

    .role-subtitle {
        font-family: var(--mono);
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin: 0;
    }

    .meta-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem 2rem;
        margin-top: 0.5rem;
        font-family: var(--mono);
        font-size: 0.85rem;
    }

    .meta-item {
        display: flex;
        align-items: center;
        gap: 0.45rem;
    }

    .meta-label {
        color: var(--text-muted);
    }

    .meta-val {
        color: var(--text-secondary);
    }

    .links-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .icon-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.2rem 0.55rem;
        background-color: var(--bg-surface-hover);
        border: 1px solid var(--border-subtle);
        border-radius: 4px;
        color: var(--text-main);
        font-size: 0.78rem;
        text-decoration: none;
        transition:
            background-color 0.15s ease,
            color 0.15s ease,
            border-color 0.15s ease;
    }

    .icon-btn:hover {
        background-color: var(--accent);
        border-color: var(--accent);
        color: #000000;
    }

    /* Section Headings */
    .section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .section-heading {
        font-family: var(--mono);
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--text-muted);
        letter-spacing: 0.08em;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    :global(.heading-icon) {
        color: var(--alabaster-grey);
    }

    :global(.cat-icon) {
        color: var(--stormy-teal);
    }

    :global(.proj-icon) {
        color: var(--alabaster-grey);
        flex-shrink: 0;
    }

    /* Cards */
    .card {
        background-color: var(--bg-card);
        border: 1px solid var(--border-subtle);
        padding: 1.25rem 1.5rem;
        border-radius: 6px;
        box-sizing: border-box;
    }

    .summary-card p {
        margin: 0;
        color: var(--text-secondary);
        line-height: 1.65;
        font-size: 0.95rem;
    }

    /* Skills Grid */
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
    }

    .skill-category {
        background-color: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-top: 2px solid var(--accent);
        padding: 1rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .category-name {
        font-family: var(--mono);
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--text-main);
        display: flex;
        align-items: center;
        gap: 0.45rem;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
    }

    .tag {
        font-family: var(--mono);
        font-size: 0.78rem;
        font-weight: 500;
        color: var(--text-main);
        background-color: var(--bg-surface-hover);
        border: 1px solid var(--border-subtle);
        padding: 0.25rem 0.6rem;
        border-radius: 4px;
    }

    /* Cards List (Projects & Exp) */
    .cards-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .title-with-icon {
        display: flex;
        align-items: center;
        gap: 0.85rem;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .project-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        letter-spacing: -0.01em;
        color: var(--text-main);
    }

    .project-sub {
        font-family: var(--mono);
        font-size: 0.85rem;
        color: var(--text-secondary);
        display: block;
        margin-top: 0.15rem;
    }

    .teaser-text {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.55;
        margin: 0 0 1rem 0;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.75rem;
        border-top: 1px dashed var(--border-subtle);
        padding-top: 0.75rem;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .mini-tag {
        font-family: var(--mono);
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-main);
        background-color: var(--bg-surface-hover);
        border: 1px solid var(--border-subtle);
        padding: 0.2rem 0.55rem;
        border-radius: 4px;
    }

    .view-btn {
        font-family: var(--mono);
        font-size: 0.78rem;
        font-weight: 600;
        color: #000000;
        background-color: var(--accent);
        border: none;
        padding: 0.3rem 0.75rem;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: opacity 0.15s ease;
    }

    .view-btn:hover {
        opacity: 0.85;
    }

    .bullet-list {
        margin: 0;
        padding-left: 1.1rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.55;
    }

    .bullet-list li::marker {
        color: var(--text-muted);
    }

    /* Experience Specific */
    .exp-role {
        font-size: 1.15rem;
        font-weight: 600;
        margin: 0;
        color: var(--text-main);
    }

    .exp-company {
        font-family: var(--mono);
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-top: 0.15rem;
    }

    .exp-date {
        font-family: var(--mono);
        font-size: 0.78rem;
        font-weight: 600;
        color: #000000;
        background-color: var(--accent);
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
    }

    @media (max-width: 640px) {
        .name-title {
            font-size: 1.85rem;
        }

        .meta-grid {
            flex-direction: column;
            gap: 0.5rem;
        }

        .card-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .card-footer {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
