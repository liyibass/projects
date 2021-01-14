<template>
    <div>
        <ScrollHero />
        <VolumeHint />
        <Beach />
        <Stage />
        <Story />
        <Diving />
        <Video />
        <Final />
    </div>
</template>

<script>
import ScrollHero from '~/components/ScrollHero'
import VolumeHint from '~/components/VolumeHint'
import Beach from '~/components/Beach'
import Stage from '~/components/Stage'
import Story from '~/components/Story'
import Diving from '~/components/Diving'
import Video from '~/components/Video'
import Final from '~/components/Final'
export default {
    components: {
        ScrollHero,
        VolumeHint,
        Beach,
        Stage,
        Story,
        Diving,
        Video,
        Final,
    },
}
</script>

<style lang="scss" scoped></style>
