<template>
    <div class="VolumeIcon" @click="volumeHandler">
        <img
            v-if="isMuted"
            class="VolumeIcon__icon"
            :src="iconMute"
            :key="icon"
            alt=""
        />
        <img
            v-else
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

import iconMute from '~/assets/images/icon_mute_48x48.svg'
import iconMuteBig from '~/assets/images/icon_mute_120x120.svg'
import iconVolume from '~/assets/images/icon_volume_120x120.svg'
import iconVolume1 from '~/assets/images/icon_volume_1_48x48.svg'
import iconVolume2 from '~/assets/images/icon_volume_2_48x48.svg'
import iconVolume3 from '~/assets/images/icon_volume_3_48x48.svg'

export default {
    data() {
        return {
            isMuted: false,
            icon: 0,
            iconMute: iconMute,
            iconArray: [iconVolume1, iconVolume2, iconVolume3],
        }
    },
    methods: {
        volumeHandler() {
            this.isMuted = !this.isMuted

            this.$el.classList.add('clicked')
            setTimeout(() => {
                this.$el.classList.remove('clicked')
            }, 300)
        },
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
    // background: gold;
    background: rgba(0, 0, 0, 0.3);
    height: 48px;
    border-radius: 24px;
}

.clicked {
    animation-name: jump;
    animation-duration: 0.3s;
}

@keyframes jump {
    0% {
        transform: scale(1);
    }
    40% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
