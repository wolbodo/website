<script lang="ts">
	import type { Paragraph } from './type';
	import { sanitize } from 'isomorphic-dompurify';

	export let data: Paragraph['data'];
	export let type: Paragraph['type'];
	export let id: Paragraph['id'];
</script>

<p>{@html sanitize(data.text)}</p>
