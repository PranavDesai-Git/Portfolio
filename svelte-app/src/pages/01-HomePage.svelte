<script>
    import { onMount } from "svelte";
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
    import GithubGraph from "../lib/GithubGraph.svelte";
    import heroBg from "../assets/herobackground.webp";

    let displayedSubtitle = $state("");
    let showCursor = $state(true);
    const fullSubtitle = "Networking | Systems | Backend Engineer";

    onMount(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < fullSubtitle.length) {
                displayedSubtitle += fullSubtitle.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    showCursor = false;
                }, 2000); // Blink for 2 seconds then vanish
            }
        }, 30); // Very fast typing
    });

    function handleCardMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    }

    function reveal(node) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    node.classList.add('revealed');
                    observer.unobserve(node);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(node);
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }
</script>

<svelte:head>
    <link rel="preload" as="image" href={heroBg} type="image/webp" fetchpriority="high" />
</svelte:head>

<div class="page-container">
    <div class="hero-image-banner">
        <img src={heroBg} alt="Hero Banner" class="hero-banner-img" fetchpriority="high" decoding="async" />
    </div>

    <div class="page-body">
        <header class="hero-text-content">
            <div class="name-row">
                <h1 class="name-title">Pranav Desai</h1>
            </div>
            <p class="role-subtitle">
                {displayedSubtitle}{#if showCursor}<span class="cursor">█</span>{/if}
            </p>

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
                                class="icon-btn"
                            >
                                <Fa icon={faGithub} size="0.85x" /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pranav-desai-542961385/"
                                target="_blank"
                                rel="noreferrer"
                                class="icon-btn"
                            >
                                <Fa icon={faLinkedinIn} size="0.85x" /> LinkedIn
                            </a>
                            <a
                                href="https://x.com/prnvdsi"
                                target="_blank"
                                rel="noreferrer"
                                class="icon-btn"
                            >
                                <Fa icon={faXTwitter} size="0.85x" /> X
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Overview Section -->
        <section class="section overview-section reveal-hidden" use:reveal>
            <h2 class="section-heading">
                <Fa icon={faFileLines} size="1x" class="heading-icon" /> Overview
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
        <section class="section skills-section reveal-hidden" use:reveal>
            <h2 class="section-heading">
                <Fa icon={faLayerGroup} size="1x" class="heading-icon" /> Skills
            </h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <div class="category-name">
                        <Fa icon={faCode} size="0.9x" class="cat-icon" /> Languages
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
                        <Fa icon={faWrench} size="0.9x" class="cat-icon" /> Tools & Infra
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

        <!-- Contribution Graph -->
        <section class="section github-section reveal-hidden" use:reveal>
            <h2 class="section-heading">
                <Fa icon={faGithub} size="1x" class="heading-icon" /> Commit Activity
            </h2>
            <GithubGraph />
        </section>

        <!-- Projects -->
        <section class="section projects-section reveal-hidden" use:reveal>
            <h2 class="section-heading">
                <Fa icon={faCode} size="1x" class="heading-icon" /> Featured Projects
            </h2>
            <div class="projects-grid">
                <!-- Rugit -->
                <article class="project-item" onmousemove={handleCardMouseMove}>
                    <div class="card-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faCodeBranch} size="1.1x" class="proj-icon" />
                                </div>
                                <div>
                                    <h3 class="project-title">Rugit</h3>
                                    <span class="project-sub">Custom Git Version Control Engine</span>
                                </div>
                            </div>
                        </div>
                        <p class="teaser-text">
                            Custom version control engine built in Rust. Replicates
                            Git's plumbing architecture, SHA-1/Zlib object storage,
                            binary <code>.git/index</code> staging parser, and Git Smart
                            HTTP wire protocol.
                        </p>
                    </div>
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
                <article class="project-item" onmousemove={handleCardMouseMove}>
                    <div class="card-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faTerminal} size="1.1x" class="proj-icon" />
                                </div>
                                <div>
                                    <h3 class="project-title">qLog</h3>
                                    <span class="project-sub">Local AI-Driven Project Management TUI</span>
                                </div>
                            </div>
                        </div>
                        <p class="teaser-text">
                            Terminal user interface built in Go using Charm Bubble Tea.
                            Integrates a local dual-model AI pipeline via Ollama (Qwen &
                            Gemma) for automated agenda summary generation.
                        </p>
                    </div>
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
                <article class="project-item" onmousemove={handleCardMouseMove}>
                    <div class="card-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faGlobe} size="1.1x" class="proj-icon" />
                                </div>
                                <div>
                                    <h3 class="project-title">OllaNews</h3>
                                    <span class="project-sub">Local AI News Aggregator & Pipeline</span>
                                </div>
                            </div>
                        </div>
                        <p class="teaser-text">
                            Data pipeline built in Python/Flask to aggregate Google News
                            feeds, extract raw HTML using Trafilatura, and generate
                            single-paragraph article summaries locally via Ollama.
                        </p>
                    </div>
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
                <article class="project-item" onmousemove={handleCardMouseMove}>
                    <div class="card-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faCamera} size="1.1x" class="proj-icon" />
                                </div>
                                <div>
                                    <h3 class="project-title">Wimp</h3>
                                    <span class="project-sub">Android Botanical Vision Application</span>
                                </div>
                            </div>
                        </div>
                        <p class="teaser-text">
                            Native Android app in Kotlin using Jetpack Compose and
                            CameraX to process raw YUV camera frame bytes for real-time
                            luminance tracking and plant taxonomy identification.
                        </p>
                    </div>
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

            </div>
        </section>

        <!-- Experience -->
        <section class="section experience-section reveal-hidden" use:reveal>
            <h2 class="section-heading">
                <Fa icon={faBriefcase} size="1x" class="heading-icon" /> Experience
            </h2>
            <div class="exp-list">
                <!-- Darkcity Atelier -->
                <article class="exp-item">
                    <div class="exp-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faBriefcase} size="1.1x" class="proj-icon" />
                                </div>
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
                    </div>
                </article>

                <!-- G Electra Software Club -->
                <article class="exp-item">
                    <div class="exp-content">
                        <div class="card-header">
                            <div class="title-with-icon">
                                <div class="icon-wrapper">
                                    <Fa icon={faUsers} size="1.1x" class="proj-icon" />
                                </div>
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
                    </div>
                </article>
            </div>
        </section>
    </div>
</div>

<style>
    :global(body) {
        background-color: #000000;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .cursor {
        animation: blink 1s step-end infinite;
        color: #EDEDED;
        margin-left: 2px;
        display: inline-block;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }

    .reveal-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    :global(.reveal-hidden.revealed) {
        opacity: 1;
        transform: translateY(0);
    }

    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #000000;
        color: #EDEDED;
        font-family: var(--font-sans);
        min-height: 100vh;
    }

    .hero-image-banner {
        position: relative;
        width: 100%;
        height: clamp(300px, 45vw, 600px);
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
    }

    .page-body {
        display: flex;
        flex-direction: column;
        gap: 96px;
        padding: 0 48px 96px 48px;
        box-sizing: border-box;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }

    .hero-text-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
        margin-top: -120px;
    }

    .name-row {
        display: flex;
        align-items: center;
    }

    .name-title {
        font-family: var(--font-heading);
        font-size: clamp(3rem, 6vw, 5rem);
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 1;
        color: #FFFFFF;
        margin: 0;
        text-shadow: 0 4px 32px rgba(0, 0, 0, 0.9);
    }

    .role-subtitle {
        font-family: var(--font-mono);
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: #f8fafc;
        margin: 0;
        text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
    }

    .meta-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
        font-size: 0.95rem;
    }

    .meta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 24px;
    }

    .meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .meta-label {
        color: #A3A3A3;
        font-weight: 500;
    }

    .meta-val {
        color: #D4D4D4;
    }

    a.link {
        color: #EDEDED;
        text-decoration: none;
        border-bottom: 1px solid rgba(237, 237, 237, 0.3);
        transition: border-color 0.2s ease, color 0.2s ease;
    }

    a.link:hover {
        color: #FFFFFF;
        border-color: #FFFFFF;
    }

    .links-group {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }

    .icon-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background-color: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 6px;
        color: #D4D4D4;
        font-size: 0.85rem;
        font-weight: 500;
        text-decoration: none !important;
        transition: all 0.2s ease;
    }

    .icon-btn:hover {
        background-color: #EDEDED;
        color: #000000;
        border-color: #EDEDED;
        transform: translateY(-1px);
    }

    /* Section Styles */
    .section {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .section-heading {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        font-weight: 600;
        color: #A3A3A3;
        letter-spacing: 0.05em;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
        text-transform: uppercase;
    }

    :global(.heading-icon) {
        color: #A3A3A3;
    }

    .overview-content p {
        margin: 0;
        color: #D4D4D4;
        font-size: 1.15rem;
        line-height: 1.6;
        font-weight: 400;
        max-width: 800px;
    }

    /* Skills Grid */
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 48px;
        width: 100%;
    }

    .skill-category {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .category-name {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        color: #EDEDED;
        display: flex;
        align-items: center;
        gap: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    :global(.cat-icon) {
        color: #A3A3A3;
        font-size: 0.8rem;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .skill-item {
        font-size: 0.95rem;
        font-weight: 500;
        color: #A3A3A3;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.03);
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.2s ease;
    }

    .skill-item:hover {
        color: #EDEDED;
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.15);
    }

    :global(.skill-icon) {
        color: #A3A3A3;
        font-size: 1.1em;
    }

    .skill-item:hover :global(.skill-icon) {
        color: #EDEDED;
    }

    /* Projects Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        width: 100%;
    }

    @media (max-width: 900px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }

    .project-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.02);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 32px;
        transition: transform 0.3s ease, background 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .project-item::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 255, 255, 0.05), transparent 40%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 0;
    }

    .project-item:hover::before {
        opacity: 1;
    }

    .project-item:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.04);
    }

    .card-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
        z-index: 1;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 16px;
    }

    .title-with-icon {
        display: flex;
        align-items: flex-start;
        gap: 16px;
    }

    .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
    }

    :global(.proj-icon) {
        color: #EDEDED;
    }

    .project-title {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        letter-spacing: 0;
        color: #EDEDED;
        line-height: 1.1;
    }

    .project-sub {
        font-family: var(--font-sans);
        font-size: 0.9rem;
        font-weight: 500;
        color: #A3A3A3;
        display: block;
        margin-top: 4px;
    }

    .teaser-text {
        color: #A3A3A3;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0 0 24px 0;
    }

    .card-footer {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: auto;
        position: relative;
        z-index: 1;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .mini-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 500;
        color: #A3A3A3;
        background-color: rgba(255, 255, 255, 0.04);
        padding: 4px 10px;
        border-radius: 4px;
    }

    .action-btns {
        display: flex;
        gap: 12px;
        width: 100%;
    }

    .view-btn {
        flex: 1;
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
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .view-btn:hover {
        background-color: #FFFFFF;
        color: #000000;
        border-color: #FFFFFF;
        transform: translateY(-1px);
    }

    .view-btn.repo-btn {
        background-color: transparent;
        color: #EDEDED;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .view-btn.repo-btn:hover {
        background-color: #FFFFFF;
        color: #000000;
        border-color: #FFFFFF;
    }

    /* Experience List */
    .exp-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .exp-item {
        background: rgba(255, 255, 255, 0.02);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 32px;
        transition: transform 0.3s ease, background 0.3s ease;
    }

    .exp-item:hover {
        background: rgba(255, 255, 255, 0.04);
        transform: translateY(-2px);
    }

    .exp-content {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .exp-role {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0;
        color: #EDEDED;
        line-height: 1.1;
    }

    .exp-company {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        color: #A3A3A3;
        margin-top: 4px;
    }

    .exp-date {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        font-weight: 500;
        color: #A3A3A3;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 6px 12px;
        border-radius: 4px;
        align-self: flex-start;
    }

    .bullet-list {
        margin: 0;
        padding-left: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        color: #A3A3A3;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .bullet-list li::marker {
        color: #A3A3A3;
    }

    /* Responsive */
    @media (max-width: 960px) {
        .page-body {
            padding: 0 32px 64px 32px;
            gap: 64px;
        }

        .skills-grid {
            gap: 48px;
        }
    }

    @media (max-width: 640px) {
        .page-body {
            padding: 0 24px 48px 24px;
            gap: 48px;
        }

        .hero-text-content {
            margin-top: -80px;
        }

        .projects-grid {
            grid-template-columns: 1fr;
        }
        
        .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        .action-btns {
            flex-direction: column;
        }

        .view-btn {
            width: 100%;
            min-height: 48px;
        }
    }
</style>
