<script lang="ts">
	import type { PageData } from './$types';
	import User from '$lib/User.svelte';

	export let data: PageData;
</script>

{#each data.posts.data as post}
	<article>
		<h2>{post.attributes.title}</h2>
		{#if post.attributes.createdBy}
			<p>By {post.attributes.createdBy.firstname}</p>
		{/if}

		<p>{post.attributes.content}</p>
	</article>
{/each}

<User />

<style>
	article {
		color: var(--black);
		background: var(--white);
		margin-bottom: 1rem;
		padding: 0.1rem 1rem;
	}
</style>
