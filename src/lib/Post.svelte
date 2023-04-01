<script lang="ts">
	import type { Blocks } from './blocks/type';
	import Block from './blocks/Block.svelte';
	export let title: String;
	export let createdBy: {
		firstname: string;
	} | null;

	export let content: string;

	$: ({ blocks } = JSON.parse(content) as Blocks);
</script>

<article>
	<h2>{title}</h2>
	{#if createdBy}
		<p>By {createdBy.firstname}</p>
	{/if}

	{#each blocks as block}
		<Block {block} />
	{/each}

	<pre>{JSON.stringify(JSON.parse(content), null, 2)}</pre>
</article>

<style>
	article {
		color: var(--black);
		background: var(--white);
		margin-bottom: 1rem;
		padding: 0.1rem 1rem;
	}
</style>
