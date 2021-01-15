<template>
    <div class="VolumeHint" id="VolumeHint">
        <div class="VolumeHint__content">
            <div class="VolumeHint__content_icon">
                <VolumeIcon />
            </div>
            <div class="VolumeHint__content_text">
                請點擊圖示開啟聲音<br />
                獲得最佳閱讀體驗
            </div>
        </div>

        <div class="VolumeHint__anchor" />
    </div>
</template>

<script>
import VolumeIcon from '../components/VolumeIcon'
export default {
    components: {
        VolumeIcon,
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
        // .addIndicators({ name: 'volumeHintFixScene' })

        this.$scrollmagic.addScene([volumeHintScene, volumeHintFixScene])
    },
}
</script>

<style lang="scss" scoped>
.VolumeHint {
    z-index: 101;
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

        &_icon {
            width: 120px;
            height: 120px;
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
