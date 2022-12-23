<script lang="ts">
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import "../app.css";
	import Header from '$components/navigation/Header.svelte';
</script>

<Header />
<slot />
