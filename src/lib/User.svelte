<!-- The user component queries the member system for login information -->

<script lang="ts">
	import { onMount } from 'svelte';
	let user: any;
	onMount(async () => {
		user = {
			email: 'a.esselink@gmail.com',
			name: 'Dexter',
			id: '1',
			roles: ['board', 'self'],
			iat: 1680194365,
			exp: 1680280765,
			iss: 'auth',
			sub: '1'
		};
		return;
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
