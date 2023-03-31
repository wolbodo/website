<script lang="ts">
	import Post from '$lib/Post.svelte';
	import type { PageData } from './$types';
	import User from '$lib/User.svelte';

	export let data: PageData;
</script>

{#each data.posts.data as post}
	<Post
		title={post.attributes.title}
		createdBy={post.attributes.createdBy}
		content={post.attributes.content}
	/>
{/each}

<User />
