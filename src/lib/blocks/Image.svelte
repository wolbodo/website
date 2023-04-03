<script lang="ts">
	import { sanitize } from 'isomorphic-dompurify';
	import type { Image } from './type';

	export let data: Image['data'];
	const url = (path: string) => `https://cms.wolbodo.nl${path}`;

	$: srcset = (['small', 'medium', 'large'] as const)
		.map((size) => data.file.formats[size])
		.filter((format) => format)
		.map((format) => `${url(format.url)} ${format.width}px`)
		.join(', ');

	// large | 1000px | | medium | 750px | | small | 500px
</script>

<img {srcset} src={url(data.file.url)} alt={data.file.alt} />

<p>{@html sanitize(data.caption)}</p>

<style>
	img {
		width: 100%;
	}
</style>
