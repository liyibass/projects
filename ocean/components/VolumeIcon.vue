<template>
    <div class="VolumeIcon" @click.stop="volumeHandler">
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
import iconMuteBig from '~/static/images/icon_mute_120x120.svg'

import iconVolume1 from '~/static/images/icon_volume_1_120x120.svg'
import iconVolume2 from '~/static/images/icon_volume_2_120x120.svg'
import iconVolume3 from '~/static/images/icon_volume_3_120x120.svg'

export default {
    props: ['isMuted', 'isMutedToggle'],
    data() {
        return {
            icon: 0,
            iconMuteBig: iconMuteBig,
            iconArray: [iconVolume1, iconVolume2, iconVolume3],
        }
    },
    methods: {
        volumeHandler() {
            this.isMutedToggle()

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
    border-radius: 50%;
    img {
        width: 100%;
        display: block;
    }
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
