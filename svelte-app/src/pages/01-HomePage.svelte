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
        faGamepad,
        faBrain,
    } from "@fortawesome/free-solid-svg-icons";
    import {
        faGithub,
        faLinkedinIn,
        faXTwitter,
        faGolang,
        faRust,
        faPython,
        faJava,
        faGitAlt,
        faLinux,
        faAndroid,
    } from "@fortawesome/free-brands-svg-icons";
    import { appState } from "../lib/store.svelte.js";
    import heroBg from "../assets/herobackground.jpg";
</script>

<div class="page-container">
    <!-- Hero Image Banner -->
    <div class="hero-image-banner">
        <img src={heroBg} alt="Hero Banner" class="hero-banner-img" />
    </div>

    <div class="page-body">
        <!-- Hero Text -->
        <header class="hero-text-content">
            <div class="name-row">
                <h1 class="name-title">Pranav Desai</h1>
            </div>
            <p class="role-subtitle">Networking | Systems | Backend Engineer</p>

            <div class="meta-grid">
                <div class="meta-row">
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
                </div>
                <div class="meta-row">
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
            </div>
        </header>

    <!-- Overview Section -->
    <section class="section overview-section">
        <h2 class="section-heading">
            <Fa icon={faFileLines} size="1x" class="heading-icon" /> // OVERVIEW
        </h2>
        <div class="overview-content">
            <p>
                Computer Science and Engineering student (2nd year). Building
                low-level systems, Git engines, network protocols, local AI
                pipelines, and compilers. Programming since age 12, starting
                with game development in GDScript and expanding into Rust, Go,
                C, and Assembly.
            </p>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills-section">
        <h2 class="section-heading">
            <Fa icon={faLayerGroup} size="1x" class="heading-icon" /> // SKILLS
        </h2>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="category-name">
                    <Fa icon={faCode} size="0.9x" class="cat-icon" /> LANGUAGES
                </div>
                <div class="skills-list">
                    <span class="skill-item"><Fa icon={faCode} class="skill-icon" /> C++</span>
                    <span class="skill-item"><Fa icon={faGolang} class="skill-icon" /> Go</span>
                    <span class="skill-item"><Fa icon={faRust} class="skill-icon" /> Rust</span>
                    <span class="skill-item"><Fa icon={faJava} class="skill-icon" /> Java</span>
                    <span class="skill-item"><Fa icon={faPython} class="skill-icon" /> Python</span>
                    <span class="skill-item"><Fa icon={faCode} class="skill-icon" /> C</span>
                    <span class="skill-item"><Fa icon={faMicrochip} class="skill-icon" /> Assembly</span>
                    <span class="skill-item"><Fa icon={faGamepad} class="skill-icon" /> Godot</span>
                </div>
            </div>
            <div class="skill-category">
                <div class="category-name">
                    <Fa icon={faWrench} size="0.9x" class="cat-icon" /> TOOLS & INFRA
                </div>
                <div class="skills-list">
                    <span class="skill-item"><Fa icon={faGitAlt} class="skill-icon" /> Git</span>
                    <span class="skill-item"><Fa icon={faLinux} class="skill-icon" /> Linux / POSIX</span>
                    <span class="skill-item"><Fa icon={faBrain} class="skill-icon" /> Ollama</span>
                    <span class="skill-item"><Fa icon={faGlobe} class="skill-icon" /> REST APIs</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section class="section projects-section">
        <h2 class="section-heading">
            <Fa icon={faCode} size="1x" class="heading-icon" /> // FEATURED PROJECTS
        </h2>
        <div class="projects-grid">
            <!-- Rugit -->
            <article class="project-item">
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
                    <div class="action-btns">
                        <button
                            type="button"
                            class="view-btn"
                            onclick={() => (appState.activeTab = "projects/Rugit")}
                        >
                            View Spec <Fa icon={faArrowRight} size="0.8x" />
                        </button>
                        <a
                            href="https://github.com/PranavDesai-Git/rugit"
                            target="_blank"
                            rel="noreferrer"
                            class="view-btn repo-btn"
                        >
                            View Repo <Fa icon={faArrowRight} size="0.8x" />
                        </a>
                    </div>
                </div>
            </article>

            <!-- qLog -->
            <article class="project-item">
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
                    <div class="action-btns">
                        <button
                            type="button"
                            class="view-btn"
                            onclick={() => (appState.activeTab = "projects/qLog")}
                        >
                            View Spec <Fa icon={faArrowRight} size="0.8x" />
                        </button>
                        <a
                            href="https://github.com/PranavDesai-Git/qlog"
                            target="_blank"
                            rel="noreferrer"
                            class="view-btn repo-btn"
                        >
                            View Repo <Fa icon={faArrowRight} size="0.8x" />
                        </a>
                    </div>
                </div>
            </article>

            <!-- OllaNews -->
            <article class="project-item">
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
                    <div class="action-btns">
                        <button
                            type="button"
                            class="view-btn"
                            onclick={() =>
                                (appState.activeTab = "projects/OllaNews")}
                        >
                            View Spec <Fa icon={faArrowRight} size="0.8x" />
                        </button>
                        <a
                            href="https://github.com/PranavDesai-Git/ollanews"
                            target="_blank"
                            rel="noreferrer"
                            class="view-btn repo-btn"
                        >
                            View Repo <Fa icon={faArrowRight} size="0.8x" />
                        </a>
                    </div>
                </div>
            </article>

            <!-- Wimp -->
            <article class="project-item">
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
                        <span class="mini-tag">Compose</span>
                        <span class="mini-tag">Coroutines</span>
                    </div>
                    <div class="action-btns">
                        <button
                            type="button"
                            class="view-btn"
                            onclick={() => (appState.activeTab = "projects/Wimp")}
                        >
                            View Spec <Fa icon={faArrowRight} size="0.8x" />
                        </button>
                        <a
                            href="https://github.com/PranavDesai-Git/wimp"
                            target="_blank"
                            rel="noreferrer"
                            class="view-btn repo-btn"
                        >
                            View Repo <Fa icon={faArrowRight} size="0.8x" />
                        </a>
                    </div>
                </div>
            </article>

            <!-- 16-Bit Assembler -->
            <article class="project-item">
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
                    <div class="action-btns">
                        <button
                            type="button"
                            class="view-btn"
                            onclick={() =>
                                (appState.activeTab = "projects/Assembler")}
                        >
                            View Spec <Fa icon={faArrowRight} size="0.8x" />
                        </button>
                        <a
                            href="https://github.com/PranavDesai-Git"
                            target="_blank"
                            rel="noreferrer"
                            class="view-btn repo-btn"
                        >
                            View Repo <Fa icon={faArrowRight} size="0.8x" />
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>

    <!-- Experience -->
    <section class="section experience-section">
        <h2 class="section-heading">
            <Fa icon={faBriefcase} size="1x" class="heading-icon" /> // EXPERIENCE
        </h2>
        <div class="exp-list">
            <!-- Darkcity Atelier -->
            <article class="exp-item">
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
            <article class="exp-item">
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
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .hero-image-banner {
        position: relative;
        width: 100%;
        height: clamp(200px, 32vw, 540px);
        margin: 0;
        overflow: hidden;
    }

    .hero-banner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scaleY(-1);
        display: block;
        transition: transform 0.4s ease;
    }

    .page-body {
        display: flex;
        flex-direction: column;
        gap: 6.5rem;
        padding: 0.85rem 3rem 6rem 3rem;
        box-sizing: border-box;
        width: 100%;
    }

    .hero-text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        width: 100%;
        margin-top: -4.5rem;
        position: relative;
        z-index: 2;
    }

    .name-row {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .name-title {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.05;
        color: var(--text-main);
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.8);
        margin: 0;
    }

    .role-subtitle {
        font-family: var(--font-sans);
        font-size: 1.15rem;
        font-weight: 500;
        letter-spacing: -0.01em;
        color: var(--text-main);
        text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95);
        margin: 0;
    }

    .meta-grid {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 0.5rem;
        font-family: var(--font-sans);
        font-size: 0.9rem;
    }

    .meta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.25rem 2rem;
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
        color: var(--text-inverse);
    }

    /* Section Headings */
    .section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .overview-section {
        margin-top: 3.5rem;
    }

    .section-heading {
        font-family: var(--font-heading);
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--text-muted);
        letter-spacing: 0.08em;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
    }

    :global(.heading-icon) {
        color: var(--text-main);
    }

    :global(.cat-icon) {
        color: var(--stormy-teal);
    }

    :global(.proj-icon) {
        color: var(--text-main);
        flex-shrink: 0;
    }

    .overview-content p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 1.15rem;
        line-height: 1.7;
        font-weight: 500;
        max-width: 900px;
    }

    /* Skills Grid */
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
        width: 100%;
    }

    .skill-category {
        background-color: transparent;
        border: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .category-name {
        font-family: var(--font-heading);
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: var(--text-main);
        display: flex;
        align-items: center;
        gap: 0.6rem;
        border-bottom: 1px solid var(--border-subtle);
        padding-bottom: 0.6rem;
        white-space: nowrap;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem 1.75rem;
        width: 100%;
    }

    .skill-item {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--text-secondary);
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        white-space: nowrap;
        transition: color 0.15s ease;
    }

    .skill-item:hover {
        color: var(--text-main);
    }

    :global(.skill-icon) {
        color: var(--stormy-teal);
        font-size: 1.2em;
        opacity: 0.9;
    }

    .skill-item:hover :global(.skill-icon) {
        color: var(--text-main);
        opacity: 1;
    }

    /* Projects Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1.75rem;
        width: 100%;
    }

    .project-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background: transparent;
        border: none;
        padding: 0;
    }

    .project-item:not(:last-child)::after {
        content: "";
        position: absolute;
        right: -0.875rem;
        top: 15%;
        height: 70%;
        width: 0;
        border-left: 1px dotted var(--border-subtle);
    }

    /* Experience List */
    .exp-list {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
    }

    .exp-item {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        padding-bottom: 1.75rem;
        border-bottom: 1px dotted var(--border-subtle);
        background: transparent;
    }

    .exp-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
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
        font-family: var(--font-heading);
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
        letter-spacing: -0.01em;
        color: var(--text-main);
    }

    .project-sub {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        font-weight: 500;
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
        min-height: 52px;
        align-content: flex-start;
    }

    .mini-tag {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-main);
        background-color: var(--bg-surface-hover);
        border: 1px solid var(--border-subtle);
        padding: 0.2rem 0.55rem;
        border-radius: 4px;
    }

    .action-btns {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        width: 100%;
        margin-top: 0.25rem;
    }

    .view-btn {
        font-family: var(--font-sans);
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        color: var(--text-inverse);
        background-color: var(--accent);
        border: none;
        padding: 0.45rem 0.85rem;
        min-height: 36px;
        border-radius: 4px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        text-decoration: none;
        box-sizing: border-box;
        transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    }

    .view-btn:hover {
        background-color: var(--text-main);
        color: var(--text-inverse);
    }

    .view-btn.repo-btn {
        background-color: transparent;
        color: var(--text-main);
        border: 1px solid var(--border-subtle);
    }

    .view-btn.repo-btn:hover {
        background-color: var(--accent);
        border-color: var(--accent);
        color: var(--text-inverse);
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
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-main);
    }

    .exp-company {
        font-family: var(--font-sans);
        font-size: 0.88rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin-top: 0.15rem;
    }

    .exp-date {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-inverse);
        background-color: var(--accent);
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
    }

    @media (max-width: 1200px) {
        .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .project-item:not(:last-child)::after {
            display: none;
        }
    }

    @media (max-width: 960px) {
        .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media (max-width: 640px) {
        .page-body {
            padding: 0.5rem 1.25rem 4rem 1.25rem;
            gap: 3.5rem;
        }

        .hero-text-content {
            margin-top: -3.25rem;
        }

        .name-title {
            font-size: 2.25rem;
            word-break: break-word;
        }

        .role-subtitle {
            font-size: 1.05rem;
        }

        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .card-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }

        .view-btn {
            width: 100%;
            justify-content: center;
            min-height: 44px;
        }
    }
</style>
