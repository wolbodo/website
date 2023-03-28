import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public'

export const load = (async ({ fetch }) => {
    const res = await fetch('https://cms.wolbodo.nl/api/posts', {
        headers: {
            Authorization: `Bearer ${env.PUBLIC_API_KEY}`
        }
    })
    console.log(res.ok, res.headers)
    const posts = await res.json()
    console.log(posts)

    return {
        posts
    };

}) satisfies PageLoad;
