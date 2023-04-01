<script lang="ts">
	import type { Header } from './type';
	import { sanitize } from 'isomorphic-dompurify';

	export let data: Header['data'];
</script>

<svelte:element this={`h${data.level}`}>{@html sanitize(data.text)}</svelte:element>
