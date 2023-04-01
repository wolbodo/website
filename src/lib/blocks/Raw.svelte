<script lang="ts">
	import { sanitize } from 'isomorphic-dompurify';
	import type { Raw } from './type';

	export let data: Raw['data'];
</script>

{@html sanitize(data.html)}
