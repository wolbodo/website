<script lang="ts">
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

	export let block: Block;
</script>

{#if isHeader(block)}
	<svelte:element this={`h${block.data.level}`}>{block.data.text}</svelte:element>
{:else if isParagraph(block)}
	<p>{block.data.text}</p>
{:else if isTable(block)}
	<table>
		{#each block.data.content as row}
			<tr>
				{#each row as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</table>
{:else if isList(block)}
	<svelte:element this={block.data.style === 'unordered' ? 'ul' : 'ol'}>
		{#each block.data.items as item}
			<li>{item}</li>
		{/each}
	</svelte:element>
{:else}
	<section>
		<h3>Block '{block.type}' not implemented</h3>
		<pre>{JSON.stringify(block.data, null, 2)}</pre>
	</section>
{/if}

<!-- {:else if isWarning(block)}
{:else if isCode(block)}
{:else if isRaw(block)}{:else if isQuote(block)}{:else if isChecklist(block)}{:else if isDelimiter(block)}{/if} -->

<style>
	section {
		border: thin solid var(--accent-color);
		margin: 0.5rem 0;
	}
</style>
