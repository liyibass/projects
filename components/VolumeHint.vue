<template>
    <div class="VolumeHint" id="VolumeHint">
        <div class="VolumeHint__content">
            <div class="VolumeHint__content_icon">
                <h1>我是ICON</h1>
            </div>
            <div class="VolumeHint__content_text">
                請開啟聲音<br />
                獲得最佳閱讀體驗
            </div>
        </div>
    </div>
</template>

<script>
export default {
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

        this.$scrollmagic.addScene(volumeHintScene)
    },
}
</script>

<style lang="scss" scoped>
.VolumeHint {
    z-index: 0;
    height: 100vh;
    background: black;

    font-weight: 300;
    font-size: 18px;
    line-height: 140%;
    /* or 25px */
    text-align: center;
    color: #ffffff;

    &__content {
        opacity: 0;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
