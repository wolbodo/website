<script lang="ts">
	import type { PageData } from './$types';
	import User from '$lib/User.svelte';

	export let data: PageData;
</script>

<h1>Wolbodo</h1>

{#each data.posts.data as post}
	<article>
		<h2>{post.attributes.title}</h2>
		<p>By {post.attributes.createdBy.firstname}</p>

		<p>{post.attributes.content}</p>
	</article>
{/each}

<User />
