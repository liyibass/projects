<template>
    <div class="VolumeToggle" id="VolumeToggle">
        <div class="VolumeToggle__content">
            <div class="VolumeToggle__content_icon" @click="volumeHandler">
                <!-- <img src="~/static/images/icon_mute_120x120.svg" alt="" /> -->
                <VolumeIcon :big="true" />
            </div>

            <div class="VolumeToggle__content_text">
                請點擊圖示開啟聲音<br />
                獲得最佳閱讀體驗
            </div>
        </div>

        <div class="VolumeToggle__anchor" />
    </div>
</template>

<script>
import VolumeNavbar from '~/components/VolumeNavbar'
import iconMuteBig from '~/static/images/icon_mute_120x120.svg'

export default {
    components: {
        VolumeNavbar,
    },
    data() {
        return {
            isMuted: true,
            forceShowIcon: true,
        }
    },
    methods: {
        volumeHandler() {
            this.isMuted = !this.isMuted
        },
    },
    mounted() {
        const VolumeToggleContentDOM = document.querySelector(
            '.VolumeToggle__content'
        )

        const VolumeToggleScene = this.$scrollmagic
            .scene({
                triggerElement: '#VolumeToggle',
                offset: 0,
                triggerHook: 0.5,
                duration: 100,
            })
            .on('progress', (e) => {
                VolumeToggleContentDOM.style.opacity = e.progress
                // ScrollHeroMaskDom.style.opacity = e.progress
            })
            // Handle force show VolumeNavbar(set this.forceShowIcon flag to true)
            .on('enter', () => {
                this.forceShowIcon = true
            })
            .on('leave', () => {
                this.forceShowIcon = true
            })

        // .addIndicators({ name: 'VolumeToggleScene' })

        this.$scrollmagic.addScene([VolumeToggleScene])
    },
}
</script>

<style lang="scss" scoped>
.VolumeToggle {
    position: relative;
    height: 100vh;
    background: black;

    font-weight: 300;
    font-size: 18px;
    line-height: 140%;

    text-align: center;
    color: #ffffff;

    &__content {
        opacity: 0;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_icon {
            width: 120px;
            height: 120px;

            cursor: pointer;

            img {
                width: 100%;
            }
        }
        &_text {
            margin-top: 8px;
        }
    }

    &__anchor {
        // background: gold;
        width: 100%;
        height: 10px;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
}
</style>
