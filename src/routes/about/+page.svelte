<script lang="ts">
	import Block from '$lib/blocks/Block.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ about } = data);
	$: content = JSON.parse(about.attributes.content);
</script>

<article>
	<h1>{about.attributes.titel}</h1>

	{#each content.blocks as block}
		<Block {block} />
	{/each}
</article>

<style>
	article {
		color: var(--black);
		background: var(--white);
		margin-bottom: 1rem;
		padding: 0.1rem 1rem;
	}
</style>
