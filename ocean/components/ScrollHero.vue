<template>
    <div class="ScrollHero" id="ScrollHero">
        <Logo />
        <div class="ScrollHero__background">
            <LongImage image="1" :zoom="true" />
        </div>

        <div class="ScrollHero__title">
            <div class="ScrollHero__title_text">
                寂聲終章
            </div>
            <div class="ScrollHero__title_wave">
                <img src="@/static/images/mainWave.svg" alt="" />
            </div>
        </div>
        <div class="ScrollHero__mask" />

        <div class="ScrollHero__anchor"></div>
    </div>
</template>

<script>
import LongImage from './LongImage'
import Logo from './Logo'

export default {
    components: {
        LongImage,
        Logo,
    },
    data() {
        return {}
    },
    mounted() {
        const ScrollHeroMaskDOM = document.querySelector('.ScrollHero__mask')
        const ScrollHeroTitleTextDOM = document.querySelector(
            '.ScrollHero__title_text'
        )
        const ScrollHeroTitleWaveDOM = document.querySelector(
            '.ScrollHero__title_wave'
        )

        // Declare Scene
        const backgroundDarkScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '.ScrollHero__anchor',
                // Where to start trigger from element top
                offset: 0,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 1,
                // Duration of animation
                duration: 250,
            })
            .on('progress', (e) => {
                // this.maskOpacity = e.progress
                ScrollHeroMaskDOM.style.opacity = e.progress
                ScrollHeroTitleWaveDOM.style.opacity = -e.progress + 1
            })
        // .addIndicators({ name: 'backgroundDarkScene' })

        const titleFadeScene = this.$scrollmagic
            .scene({
                triggerElement: '.ScrollHero__anchor',
                offset: 0,
                triggerHook: 0.2,
                // Duration of animation
                duration: 300,
            })
            .on('progress', (e) => {
                ScrollHeroTitleTextDOM.style.opacity = -e.progress + 1
            })
            .on('enter', (e) => {
                // ScrollHeroTitleDOM.style.zIndex = 1
            })
            .on('leave', (e) => {
                // ScrollHeroTitleDOM.style.zIndex = -1
            })
        // .addIndicators({ name: 'titleFadeScene' })

        this.$scrollmagic.addScene([backgroundDarkScene, titleFadeScene])
    },
}
</script>

<style lang="scss" scoped>
.ScrollHero {
    // z-index: 100;
    position: relative;
    background: black;

    &__title {
        z-index: 1;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 2rem;
        line-height: 150%;
        /* identical to box height, or 48px */
        text-align: center;
        letter-spacing: 0.05em;

        color: #ffffff;

        text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);

        &_wave {
            width: 280px;
            img {
                width: 100%;
            }
        }
    }

    &__mask {
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        background: black;
        opacity: 0;
    }

    &__anchor {
        position: absolute;
        bottom: 250px;
        // background: gold;
        width: 100%;
        height: 10px;
        z-index: -1;
    }
}
</style>
