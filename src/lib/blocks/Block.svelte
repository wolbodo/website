<script lang="ts">
	import Checklist from './Checklist.svelte';
	import Code from './Code.svelte';
	import Delimiter from './Delimiter.svelte';
	import Header from './Header.svelte';
	import List from './List.svelte';
	import Paragraph from './Paragraph.svelte';
	import Quote from './Quote.svelte';
	import Raw from './Raw.svelte';
	import Table from './Table.svelte';
	import {
		type Block,
		isHeader,
		isParagraph,
		isTable,
		isList,
		isWarning,
		isCode,
		isRaw,
		isQuote,
		isChecklist,
		isDelimiter
	} from './type';
	import Warning from './Warning.svelte';

	export let block: Block;
</script>

{#if isHeader(block)}
	<Header {...block} />
{:else if isParagraph(block)}
	<Paragraph {...block} />
{:else if isTable(block)}
	<Table {...block} />
{:else if isList(block)}
	<List {...block} />
{:else if isWarning(block)}
	<Warning {...block} />
{:else if isCode(block)}
	<Code {...block} />
{:else if isRaw(block)}
	<Raw {...block} />
{:else if isQuote(block)}
	<Quote {...block} />
{:else if isChecklist(block)}
	<Checklist {...block} />
{:else if isDelimiter(block)}
	<Delimiter {...block} />
{:else}
	<section>
		<h3>Block '{block.type}' not implemented</h3>
		<pre>{JSON.stringify(block.data, null, 2)}</pre>
	</section>
{/if}

<style>
	section {
		border: thin solid var(--accent-color);
		margin: 0.5rem 0;
	}
</style>
