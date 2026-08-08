import fs from 'fs';
import path from 'path';

const projects = [
    { name: 'Rugit', repo: 'PranavDesai-Git/rugit' },
    { name: 'qLog', repo: 'PranavDesai-Git/qlog' },
    { name: 'OllaNews', repo: 'PranavDesai-Git/ollanews' },
    { name: 'Wimp', repo: 'PranavDesai-Git/wimp' }
];

projects.forEach(p => {
    const dir = path.join('src', 'pages', 'projects', p.name);
    fs.mkdirSync(dir, { recursive: true });
    
    // Overview
    fs.writeFileSync(path.join(dir, '01-Overview.svelte'), `<div style="padding: 48px; color: #EDEDED; font-family: var(--font-sans);">
    <h1 style="font-family: var(--font-heading);">${p.name} Overview</h1>
    <p>This is the overview page. You can customize this later.</p>
</div>
`);

    // README
    fs.writeFileSync(path.join(dir, '02-README.svelte'), `<script>
    import GithubReadme from "../../../lib/GithubReadme.svelte";
</script>
<GithubReadme repo="${p.repo}" />
`);

    // Sample MD
    fs.writeFileSync(path.join(dir, '03-Notes.md'), `# ${p.name} Notes

Write your custom markdown notes here! They will automatically show up as a tab.
`);

});

console.log("Generated!");
