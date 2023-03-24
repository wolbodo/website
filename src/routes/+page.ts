import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load = (async ({ fetch }) => {
    const res = await fetch('https://cms.wolbodo.nl/api/posts', {
        headers: {
            Authorization: `Bearer ${env.PUBLIC_API_KEY}`
        },
    })

    return {
        posts: await res.json()
    };

}) satisfies PageLoad;
