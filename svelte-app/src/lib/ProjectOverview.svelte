<script>
    import { Fa } from "svelte-fa";

    let { title, subtitle, tags, icon, description, features } = $props();
</script>

<div class="project-overview-container">
    <header class="overview-header">
        <div class="title-section">
            <div class="icon-box">
                <Fa {icon} size="2x" class="proj-icon" />
            </div>
            <div class="title-text">
                <h1>{title}</h1>
                <span class="subtitle">{subtitle}</span>
            </div>
        </div>
        <div class="tags-container">
            {#each tags as tag}
                <span class="tech-tag">{tag}</span>
            {/each}
        </div>
    </header>

    <div class="content-section">
        <div class="section-header">OVERVIEW</div>
        <div class="description-block">
            {#each description as paragraph}
                <p>{paragraph}</p>
            {/each}
        </div>
    </div>

    <div class="content-section">
        <div class="section-header">KEY FEATURES</div>
        <div class="features-list">
            {#each features as feature}
                <div class="feature-item">
                    <span class="feature-title">{feature.title}</span>
                    <span class="feature-desc">{feature.desc}</span>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .project-overview-container {
        padding: 48px;
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 48px;
        color: #EDEDED;
    }

    .overview-header {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 32px;
    }

    .title-section {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
    }

    :global(.proj-icon) {
        color: #EDEDED;
    }

    .title-text h1 {
        font-family: var(--font-heading);
        font-size: 2.5rem;
        margin: 0;
        line-height: 1.1;
    }

    .subtitle {
        font-family: var(--font-mono);
        color: #A3A3A3;
        font-size: 1.1rem;
        margin-top: 8px;
        display: block;
    }

    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .tech-tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 500;
        color: #A3A3A3;
        background-color: rgba(255, 255, 255, 0.04);
        padding: 4px 10px;
        border-radius: 4px;
    }

    .content-section {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .section-header {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: #A3A3A3;
        margin-bottom: 24px;
    }

    .description-block {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .description-block p {
        margin: 0;
        color: #D4D4D4;
        font-size: 1.15rem;
        line-height: 1.6;
        text-align: justify;
    }

    .features-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .feature-item {
        background: rgba(255, 255, 255, 0.02);
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 32px;
        transition: transform 0.3s ease, background 0.3s ease;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .feature-item:hover {
        background: rgba(255, 255, 255, 0.04);
        transform: translateY(-2px);
    }

    .feature-title {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        font-weight: 700;
        color: #EDEDED;
    }

    .feature-desc {
        color: #A3A3A3;
        font-size: 0.95rem;
        line-height: 1.6;
        text-align: justify;
    }

    @media (max-width: 768px) {
        .project-overview-container {
            padding: 24px;
        }
        
        .title-text h1 {
            font-size: 2rem;
        }
    }
</style>
