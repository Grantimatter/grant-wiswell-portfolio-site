<script lang="ts">
	import { Avatar, AppBar, LightSwitch, GradientHeading, Divider } from '@skeletonlabs/skeleton';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<AppBar>
	<svelte:fragment slot="lead"
		><Avatar
			src="https://avatars.githubusercontent.com/u/10020400?v=4"
			initials="GW"
			border="border-2 border-accent-500"
		/>
	</svelte:fragment>
	<div class="text-center flex flex-row content-center align-middle items-center">
		<GradientHeading
			tag="h1"
			direction="bg-gradient-to-r"
			from="from-primary-500"
			to="to-accent-500"
			class="text-4xl">Grant Wiswell</GradientHeading>
	</div>
	<svelte:fragment slot="trail">
        <LightSwitch />
        <Divider vertical={true} borderWidth='border-l'/>
        <a href='https://github.com/Grantimatter' target="_">
            <Fa icon={faGithub} class="text-2xl"/>
        </a>
        
        <a href='https://www.linkedin.com/in/grant-wiswell-537181183/' target="_">
            <Fa icon={faLinkedin} class="text-2xl"/>
        </a>
    </svelte:fragment>
</AppBar>
