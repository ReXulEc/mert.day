export const prerender = false;
export const ssr = false;

export async function load({ fetch, url }) {
    return { url: url.href }
   }