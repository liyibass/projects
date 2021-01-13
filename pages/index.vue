<template>
    <div>
        <ScrollHero />
        <VolumeHint />
        <Beach />
        <Stage />
        <Story />
    </div>
</template>

<script>
import ScrollHero from '~/components/ScrollHero'
import VolumeHint from '~/components/VolumeHint'
import Beach from '~/components/Beach'
import Stage from '~/components/Stage'
import Story from '~/components/Story'
export default {
    components: {
        ScrollHero,
        VolumeHint,
        Beach,
        Stage,
        Story,
    },
}
</script>

<style lang="scss" scoped></style>
