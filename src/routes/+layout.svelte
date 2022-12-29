<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../main-theme.css';
	import Header from '$components/navigation/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavigationRail from '$components/navigation/NavigationRail.svelte';
</script>

<svelte:head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik">
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter">
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter+Tight">
</svelte:head>

<div class="min-h-screen h-screen">
	<AppShell>
		<svelte:fragment slot="header"><Header /></svelte:fragment>
		<svelte:fragment slot="sidebarLeft"><NavigationRail /></svelte:fragment>
		<svelte:fragment slot="sidebarRight"></svelte:fragment>
		<svelte:fragment slot="pageHeader"></svelte:fragment>
		<!-- Router Slot -->
		<slot />
		<!-- Page Footer -->
		<svelte:fragment slot="pageFooter" />
		<svelte:fragment slot="footer" />
	</AppShell>
</div>
