<script lang="ts">
	import type { Checklist } from './type';
	import { sanitize } from 'isomorphic-dompurify';

	export let data: Checklist['data'];
</script>

<ul>
	{#each data.items as { checked, text }}
		<li>{@html sanitize(text)}</li>
	{/each}
</ul>
