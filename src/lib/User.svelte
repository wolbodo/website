<!-- The user component queries the member system for login information -->

<script lang="ts">
	import { onMount } from 'svelte';
	let user: any;
	onMount(async () => {
		const res = await fetch('https://members.wolbodo.nl/auth/me', {
			credentials: 'include'
		});

		if (res.ok) {
			user = await res.json();
		}
	});
</script>

{#if user}
	<p>Hi {user.name}</p>
{/if}
