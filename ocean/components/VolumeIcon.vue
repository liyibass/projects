<template>
    <div class="VolumeIcon">
        <img
            class="VolumeIcon__icon"
            :src="iconArray[icon]"
            :key="icon"
            alt=""
        />
    </div>
</template>

<script>
import volume1 from '~/assets/images/icon_volume_1@1x.svg'
import volume2 from '~/assets/images/icon_volume_2@1x.svg'
import volume3 from '~/assets/images/icon_volume_3@1x.svg'

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
    width: 120px;
    height: 120px;
    cursor: pointer;
    // background: gold;
}
</style>
