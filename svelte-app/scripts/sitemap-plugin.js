import fs from 'fs';
import path from 'path';

function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else if (file.endsWith('.svelte') || file.endsWith('.md')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

export function sitemapPlugin() {
    return {
        name: 'vite-plugin-sitemap',
        buildStart() {
            const domain = 'https://pranavdesai.vercel.app';
            const pagesDir = path.resolve('src/pages');
            const sitemapPath = path.resolve('public/sitemap.xml');
            
            if (!fs.existsSync(pagesDir)) return;
            
            const files = getFiles(pagesDir);
            const urls = [domain + '/'];

            for (const file of files) {
                const relativePath = path.relative(pagesDir, file).replace(/\\/g, '/');
                let cleanKey = relativePath.replace(/\.(svelte|md)$/, '');
                
                cleanKey = cleanKey.split('/').map(part => {
                    let clean = part.replace(/^\d+-/, "");
                    if (clean.endsWith("Page")) clean = clean.slice(0, -4);
                    return clean;
                }).join('/');

                if (cleanKey !== 'Home') {
                    urls.push(`${domain}/${cleanKey}`);
                }
            }

            const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${url === domain + '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}\n</urlset>`;

            fs.writeFileSync(sitemapPath, xml);
            console.log('✅ Generated sitemap.xml with ' + urls.length + ' dynamic routes.');
        }
    };
}
