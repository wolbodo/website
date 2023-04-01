<script lang="ts">
	import { sanitize } from 'isomorphic-dompurify';
	import type { Table } from './type';

	export let data: Table['data'];
</script>

<table>
	{#each data.content as row}
		<tr>
			{#each row as cell}
				<td>{@html sanitize(cell)}</td>
			{/each}
		</tr>
	{/each}
</table>
