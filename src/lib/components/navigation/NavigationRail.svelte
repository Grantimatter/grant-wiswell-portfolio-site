<script lang="ts">
    import {AppRail, AppRailTile} from "@skeletonlabs/skeleton";
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faFlag } from '@fortawesome/free-regular-svg-icons';
    import { faHouse } from '@fortawesome/free-solid-svg-icons';
    import { writable, type Writable } from "svelte/store";

    const storeValue: Writable<number> = writable(1);
</script>

<AppRail background="bg-black/30" selected={storeValue}>
    <svelte:fragment slot="lead"></svelte:fragment>
    <AppRailTile>
        <Fa icon={faHouse}/>
    </AppRailTile>
    <svelte:fragment slot="trail"></svelte:fragment>
</AppRail>