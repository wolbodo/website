<script lang="ts">
	import { sanitize } from 'isomorphic-dompurify';
	import type { Quote } from './type';

	export let data: Quote['data'];
</script>

<section class={data.alignment}>
	{@html sanitize(data.text)}

	<span>{@html sanitize(data.caption)}</span>
</section>
