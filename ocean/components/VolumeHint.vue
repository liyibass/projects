<template>
    <div class="VolumeHint" id="VolumeHint">
        <div class="VolumeHint__content" v-if="isMuted">
            <div class="VolumeHint__content_icon" @click="volumeHandler">
                <img src="~/static/images/icon_mute_120x120.svg" alt="" />
                <!-- <VolumeIcon /> -->
            </div>

            <div class="VolumeHint__content_text">
                請點擊圖示開啟聲音<br />
                獲得最佳閱讀體驗
            </div>
        </div>

        <div class="VolumeHint__content" v-else>
            <div class="VolumeHint__content_text">
                閱讀過程中<br />點選圖示可關閉聲音
            </div>
        </div>

        <VolumeNavbar v-if="!isMuted" :forceShowIcon="forceShowIcon" />

        <div class="VolumeHint__anchor" />
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
        const volumeHintContentDOM = document.querySelector(
            '.VolumeHint__content'
        )

        const volumeHintScene = this.$scrollmagic
            .scene({
                triggerElement: '#VolumeHint',
                offset: 0,
                triggerHook: 0.5,
                duration: 100,
            })
            .on('progress', (e) => {
                volumeHintContentDOM.style.opacity = e.progress
                // ScrollHeroMaskDom.style.opacity = e.progress
            })
            // Handle force show VolumeNavbar(set this.forceShowIcon flag to true)
            .on('enter', () => {
                this.forceShowIcon = true
            })

        // .addIndicators({ name: 'volumeHintScene' })

        // After trigger leaving anchor, disable content's fix
        const volumeHintFixScene = this.$scrollmagic
            .scene({
                triggerElement: '.VolumeHint__anchor',
                offset: 100,
                triggerHook: 0,
                duration: 5,
            })
            .on('enter', (e) => {
                switch (e.scrollDirection) {
                    case 'FORWARD':
                        volumeHintContentDOM.style.position = 'relative'
                        break

                    case 'REVERSE':
                        volumeHintContentDOM.style.position = 'fixed'

                        break

                    default:
                        break
                }
            })
            // Handle force show VolumeNavbar(set this.forceShowIcon flag to false)
            .on('leave', () => {
                console.log('leave')
                this.forceShowIcon = false
            })
        // .addIndicators({ name: 'volumeHintFixScene' })

        this.$scrollmagic.addScene([volumeHintScene, volumeHintFixScene])
    },
}
</script>

<style lang="scss" scoped>
.VolumeHint {
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
