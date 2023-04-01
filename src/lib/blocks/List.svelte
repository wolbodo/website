<script lang="ts">
	import type { List } from './type';
	import { sanitize } from 'isomorphic-dompurify';

	export let data: List['data'];
</script>

<svelte:element this={data.style === 'unordered' ? 'ul' : 'ol'}>
	{#each data.items as item}
		<li>{@html sanitize(item)}</li>
	{/each}
</svelte:element>
