<template>
    <div class="VolumeIcon" @click="volumeHandler" :class="{ big: big }">
        <img
            v-if="isMuted"
            class="VolumeIcon__icon"
            :src="iconMuteBig"
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
import volume1 from '~/static/images/icon_volume_1@1x.svg'
import volume2 from '~/static/images/icon_volume_2@1x.svg'
import volume3 from '~/static/images/icon_volume_3@1x.svg'
import iconMuteBig from '~/static/images/icon_mute_120x120.svg'

import iconMute from '~/static/images/icon_mute_48x48.svg'
import iconVolume from '~/static/images/icon_volume_120x120.svg'
import iconVolume1 from '~/static/images/icon_volume_1_48x48.svg'
import iconVolume2 from '~/static/images/icon_volume_2_48x48.svg'
import iconVolume3 from '~/static/images/icon_volume_3_48x48.svg'

export default {
    props: ['big'],
    data() {
        return {
            isMuted: false,
            icon: 0,
            iconMuteBig: iconMuteBig,
            iconArray: [volume1, volume2, volume3],
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

.big {
    height: 120px;
    border-radius: 60px;
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
