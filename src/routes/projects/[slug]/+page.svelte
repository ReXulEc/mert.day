<script>
    import { afterNavigate } from '$app/navigation';
    import Meta from '../../../lib/components/Meta.svelte';

    // +page.server.js'den gelen tüm veriler bu 'data' değişkenine otomatik düşer
    export let data;
    
    // data içinden projeyi ve dönüştürülmüş HTML'i alıyoruz
    $: ({ project, markdownHtml } = data);

    let backLink = '/projects';
    let backLabel = 'Back to Projects';

    afterNavigate(({ from }) => {
        if (from && from.url.pathname === '/') {
            backLink = '/';
            backLabel = 'Back to Home';
        }
    });
</script>

<Meta title={project.title} />

<div class="max-w-3xl mx-auto px-4 py-12">
    <a href={backLink} class="text-sm opacity-60 hover:opacity-100 transition-opacity flex items-center space-x-2 mb-8">
        <span>← {backLabel}</span>
    </a>

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
</div>