export const ssr = true; 
export const prerender = false; 

export async function load({ fetch, url }) {
    return { url: url.href }
   }