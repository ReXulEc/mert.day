<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { marked } from 'marked';
    import CONFIG from '../../../lib/config.js'; 
    import Meta from '../../../lib/components/Meta.svelte';

    const slug = $page.params.slug;
    const project = CONFIG.PROJECTS.find(p => p.slug === slug || p.title.toLowerCase().replace(/ /g, '-') === slug);

    let markdownHtml = '';
    let isLoading = true;
    let error = null;

    let backLink = '/projects';
    let backLabel = 'Back to Projects';

    afterNavigate(({ from }) => {
        if (from && from.url.pathname === '/') {
            backLink = '/';
            backLabel = 'Back to Home';
        }
    });

    onMount(async () => {
        if (!project || !project.mdlink) {
            error = "Project or blog post not found.";
            isLoading = false;
            return;
        }

        try {
            const response = await fetch(project.mdlink);
            if (!response.ok) throw new Error('Failed to fetch article');
            
            let mdText = await response.text();

            if (project.ignoreLines && project.ignoreLines.length > 0) {
                let lines = mdText.split('\n');
                lines = lines.filter((_, index) => !project.ignoreLines.includes(index));
                mdText = lines.join('\n');
            }

            markdownHtml = marked.parse(mdText);
        } catch (e) {
            console.error(e);
            error = "Could not load the blog post. Please try again later.";
        } finally {
            isLoading = false;
        }
    });
</script>

{#if project}
    <Meta title={project.title} />
{/if}

<div class="max-w-3xl mx-auto px-4 py-12">
    <a href={backLink} class="text-white text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center space-x-2 mb-8">
        <span>← {backLabel}</span>
    </a>

    {#if isLoading}
        <div class="animate-pulse space-y-8 mt-4">
            <div class="space-y-4 mb-10 pb-6 border-b border-[#808080]/10">
                <div class="h-3 bg-[#808080]/20 rounded w-16"></div>
                <div class="h-8 bg-[#808080]/20 rounded w-2/3"></div>
                <div class="h-4 bg-[#808080]/20 rounded w-1/3"></div>
            </div>
            
            <div class="space-y-4">
                <div class="h-4 bg-[#808080]/10 rounded w-full"></div>
                <div class="h-4 bg-[#808080]/10 rounded w-11/12"></div>
                <div class="h-4 bg-[#808080]/10 rounded w-4/5"></div>
            </div>
        </div>
    {:else if error}
        <div class="text-center py-20">
            <p class="text-red-400 font-medium">{error}</p>
        </div>
    {:else}
        <div class="space-y-3 mb-10 pb-6 border-b border-[#808080]/10">
            <p class="text-xs opacity-50">{project.year}</p>
            <h1 class="text-3xl font-semibold tracking-tight text-neutral-100">{project.title}</h1>
            {#if project.job}
                <p class="text-sm opacity-60 text-neutral-300">{project.job}</p>
            {/if}
        </div>

        <article class="prose prose-invert max-w-none 
                        prose-headings:font-medium prose-headings:text-neutral-100
                        prose-p:text-neutral-300 prose-p:leading-relaxed
                        prose-li:text-neutral-300 prose-ul:text-neutral-300 prose-ol:text-neutral-300
                        prose-strong:text-white prose-strong:font-semibold
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                        prose-pre:bg-[#808080]/5 prose-pre:border prose-pre:border-[#808080]/10
                        prose-img:rounded-2xl prose-img:mx-auto">
            {@html markdownHtml}
        </article>
    {/if}
</div>