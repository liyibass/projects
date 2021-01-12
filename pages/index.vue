<template>
    <div>
        <ScrollHero />
        <VolumeHint />
        <Beach />
    </div>
</template>

<script>
import ScrollHero from '~/components/ScrollHero'
import VolumeHint from '~/components/VolumeHint'
import Beach from '~/components/Beach'
export default {
    components: {
        ScrollHero,
        VolumeHint,
        Beach,
    },
}
</script>

<style lang="scss" scoped></style>
