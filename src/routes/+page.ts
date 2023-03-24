import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('https://cms.wolbodo.nl/api/posts')

    return {
        posts: await res.json()
    };

}) satisfies PageLoad;
