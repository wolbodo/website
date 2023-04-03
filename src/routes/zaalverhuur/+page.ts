import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/public'

export const load = (async ({ fetch }) => {
    const res = await fetch('https://cms.wolbodo.nl/api/zaalverhuur', {
        headers: {
            Authorization: `Bearer ${env.PUBLIC_API_KEY}`
        }
    })

    if (!res.ok) {
        throw error(res.status, await res.json())
    }
    const { data } = await res.json()

    return {
        content: data
    };

}) satisfies PageLoad;
