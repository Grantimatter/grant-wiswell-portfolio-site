<script lang="ts">
	import VerticalTabs from "$components/navigation/VerticalTabs.svelte";
	import Turntable from "$components/scenes/Turntable.svelte";

</script>

<svelte:head>
	<title>Home | Grant Wiswell - Software Engineer </title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="h-screen">
	<Turntable />
</div>

<button class="btn btn-ghost-primary m-6">Hello Skeleton</button>
