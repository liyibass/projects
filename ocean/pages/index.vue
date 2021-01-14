<template>
    <div>
        <!-- <ScrollHero /> -->
        <!-- <VolumeHint /> -->
        <Beach />
        <!-- <Stage /> -->
        <!-- <Story /> -->
        <Diving />
        <Beach />
    </div>
</template>

<script>
import ScrollHero from '~/components/ScrollHero'
import VolumeHint from '~/components/VolumeHint'
import Beach from '~/components/Beach'
import Stage from '~/components/Stage'
import Story from '~/components/Story'
import Diving from '~/components/Diving'
export default {
    components: {
        ScrollHero,
        VolumeHint,
        Beach,
        Stage,
        Story,
        Diving,
    },
}
</script>

<style lang="scss" scoped></style>
