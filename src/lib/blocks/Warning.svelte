<script lang="ts">
	import { sanitize } from 'isomorphic-dompurify';
	import type { Warning } from './type';

	export let data: Warning['data'];
</script>

<section>
	<h3>{@html sanitize(data.title)}</h3>
	<p>{@html sanitize(data.message)}</p>
</section>

<style>
	section {
		border: thin solid red;
	}
</style>
