<template>
    <img class="VolumeIcon" :src="iconArray[icon]" :key="icon" alt="" />
</template>

<script>
import volume1 from '../assets/images/icon_volume_1@1x.svg'
import volume2 from '../assets/images/icon_volume_2@1x.svg'
import volume3 from '../assets/images/icon_volume_3@1x.svg'

export default {
    data() {
        return {
            icon: 0,
            iconArray: [volume1, volume2, volume3],
        }
    },

    mounted() {
        // Handle volume icon animation
        const animation = setInterval(() => {
            if (this.icon !== 2) {
                this.icon++
            } else {
                this.icon = 0
            }
        }, 600)
    },
}
</script>

<style lang="scss" scoped>
.VolumeIcon {
    cursor: pointer;
}
</style>
