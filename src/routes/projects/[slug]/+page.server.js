import { error } from '@sveltejs/kit';
import CONFIG from '../../../lib/config.js'; // config.js yolunu kontrol et
import { marked } from 'marked';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params;
    
    // Projeyi bul
    const project = CONFIG.PROJECTS.find(
        p => p.slug === slug || p.title.toLowerCase().replace(/ /g, '-') === slug
    );

    // Proje veya mdlink yoksa direkt 404 dön
    if (!project || !project.mdlink) {
        throw error(404, 'Project or blog post not found');
    }

    try {
        const response = await fetch(project.mdlink);
        if (!response.ok) throw new Error('Failed to fetch MD');
        
        const mdText = await response.text();
        const markdownHtml = marked.parse(mdText);

        return {
            project: {
                title: project.title,
                year: project.year,
                job: project.job || null
            },
            markdownHtml
        };
    } catch (e) {
        console.error(e);
        throw error(500, 'Could not load the blog post backend-side.');
    }
}