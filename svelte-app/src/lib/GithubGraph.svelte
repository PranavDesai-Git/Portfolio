<script>
    import { onMount } from "svelte";

    // Fallback data
    let weeks = $state(
        Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => 0))
    );

    let recentCommits = $state([]);
    let graphHeight = $state(0);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    onMount(async () => {
        // Fetch Contribution Graph Data
        try {
            const res = await fetch("/api/github-contributions");
            if (res.ok) {
                const data = await res.json();
                if (data.contributions && data.contributions.length > 0) {
                    const sorted = data.contributions.sort((a, b) => new Date(a.date) - new Date(b.date));
                    const last364 = sorted.slice(-364);
                    
                    const newWeeks = [];
                    for (let i = 0; i < last364.length; i += 7) {
                        const weekChunk = last364.slice(i, i + 7);
                        newWeeks.push(weekChunk.map(day => parseInt(day.intensity || 0)));
                    }
                    if (newWeeks.length > 0) weeks = newWeeks;
                }
            }
        } catch (e) {
            console.error("Failed to fetch GitHub stats:", e);
        }

        // Fetch Recent Commits Data
        try {
            // Using the direct repository commits API since the Events API payload.commits can be flaky/truncated
            const evRes = await fetch("https://api.github.com/repos/PranavDesai-Git/Portfolio/commits");
            if (evRes.ok) {
                const commitsData = await evRes.json();
                const parsedCommits = [];
                
                for (let i = 0; i < Math.min(3, commitsData.length); i++) {
                    const commitObj = commitsData[i];
                    
                    const date = new Date(commitObj.commit.author.date);
                    const diffH = Math.floor((new Date() - date) / (1000 * 60 * 60));
                    let timeStr = `${diffH}h ago`;
                    if (diffH > 24) timeStr = `${Math.floor(diffH/24)}d ago`;
                    if (diffH === 0) timeStr = `just now`;

                    parsedCommits.push({
                        hash: commitObj.sha.substring(0, 7),
                        repo: "Portfolio",
                        msg: commitObj.commit.message.split('\n')[0], // First line only
                        time: timeStr
                    });
                }
                if (parsedCommits.length > 0) {
                    recentCommits = parsedCommits;
                }
            }
        } catch (e) {
            console.error("Failed to fetch recent commits:", e);
        }
    });
</script>

<div class="github-activity-layout">
    <div class="graph-section" bind:clientHeight={graphHeight}>
        <div class="graph-scroll">
            <div class="graph-wrapper">
                <div class="months">
                    {#each months as month}
                        <span class="month-label">{month}</span>
                    {/each}
                </div>
                <div class="grid">
                    {#each weeks as week}
                        <div class="week">
                            {#each week as dayLevel}
                                <div class="day level-{dayLevel}"></div>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="graph-legend">
            <span>Less</span>
            <div class="day level-0"></div>
            <div class="day level-1"></div>
            <div class="day level-2"></div>
            <div class="day level-3"></div>
            <div class="day level-4"></div>
            <span>More</span>
        </div>
    </div>

    <aside class="recent-commits-section" style={graphHeight > 0 ? `height: ${graphHeight}px;` : ''}>
        <h3 class="commits-title">Recent Activity</h3>
        <ul class="commit-list">
            {#each recentCommits as commit}
                <li class="commit-item">
                    <div class="commit-top">
                        <span class="commit-hash">{commit.hash}</span>
                        <span class="commit-repo">{commit.repo}</span>
                    </div>
                    <span class="commit-msg">{commit.msg}</span>
                    <span class="commit-time">{commit.time}</span>
                </li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    .github-activity-layout {
        display: flex;
        gap: 32px;
        align-items: stretch;
        width: 100%;
        justify-content: space-between;
    }

    @media (max-width: 1100px) {
        .github-activity-layout {
            flex-direction: column;
            gap: 32px;
        }
    }

    .graph-section {
        flex: 0 0 auto;
        max-width: 100%;
    }

    .graph-scroll {
        width: 100%;
        overflow-x: auto;
        padding-bottom: 12px;
    }

    .graph-scroll::-webkit-scrollbar {
        height: 6px;
    }

    .graph-scroll::-webkit-scrollbar-track {
        background: transparent;
    }

    .graph-scroll::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    .graph-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .graph-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: max-content;
    }

    .months {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        padding: 0 12px;
    }

    .month-label {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: #A3A3A3;
    }

    .grid {
        display: flex;
        gap: 4px;
    }

    .week {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .day {
        width: 14px;
        height: 14px;
        border-radius: 2px;
        transition: transform 0.1s ease, box-shadow 0.1s ease;
        cursor: pointer;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(255, 255, 255, 0.03);
    }

    .day:hover {
        transform: scale(1.4);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        z-index: 10;
        position: relative;
    }

    .level-0 { background-color: #000000; }
    .level-1 { background-color: #525252; }
    .level-2 { background-color: #858585; }
    .level-3 { background-color: #B8B8B8; }
    .level-4 { background-color: #EBEBEB; }

    .graph-legend {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: #A3A3A3;
        margin-top: 24px;
    }

    .recent-commits-section {
        width: 300px;
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
    }

    @media (max-width: 1100px) {
        .recent-commits-section {
            width: 100%;
        }
    }

    .commits-title {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        color: #EDEDED;
        margin: 0 0 12px 0;
    }

    .commit-list {
        list-style: none;
        padding: 0 8px 0 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0;
        overflow-y: auto;
        flex: 1;
        min-height: 0;
    }

    .commit-list::-webkit-scrollbar {
        width: 4px;
    }

    .commit-list::-webkit-scrollbar-track {
        background: transparent;
    }

    .commit-list::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    .commit-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .commit-item:first-child {
        padding-top: 0;
    }

    .commit-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .commit-top {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .commit-hash {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--stormy-teal);
        background: rgba(56, 189, 248, 0.1);
        padding: 2px 6px;
        border-radius: 4px;
    }

    .commit-repo {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: #A3A3A3;
        background: rgba(255, 255, 255, 0.05);
        padding: 2px 6px;
        border-radius: 4px;
    }

    .commit-msg {
        font-family: var(--font-sans);
        font-size: 0.9rem;
        color: #D4D4D4;
        line-height: 1.4;
    }

    .commit-time {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: #A3A3A3;
    }
</style>
