<template>
    <div class="ScrollHero" id="ScrollHero">
        <div class="ScrollHero__background">
            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="~/static/images/1.jpg"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        ~/static/images/pad/1@1x.png 1x,
                        ~/static/images/pad/1@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        ~/static/images/mobile/1@1x.png 1x,
                        ~/static/images/mobile/1@2x.png 2x,
                        ~/static/images/mobile/1@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>
        <div class="ScrollHero__title">
            珊瑚礁的寂聲終章
        </div>
        <div class="ScrollHero__mask" />

        <div class="ScrollHero__anchor">YO</div>
    </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
    data() {
        return {}
    },
    mounted() {
        const ScrollHeroMaskDOM = document.querySelector('.ScrollHero__mask')
        const ScrollHeroTitleDOM = document.querySelector('.ScrollHero__title')

        // Declare Scene
        const backgroundDarkScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '.ScrollHero__anchor',
                // Where to start trigger from element top
                offset: 0,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0.8,
                // Duration of animation
                duration: 100,
            })
            .on('progress', (e) => {
                // this.maskOpacity = e.progress
                ScrollHeroMaskDOM.style.opacity = e.progress
            })
        // .addIndicators({ name: 'backgroundDarkScene' })

        const titleFadeScene = this.$scrollmagic
            .scene({
                triggerElement: '.ScrollHero__anchor',
                offset: 0,
                triggerHook: 0.5,
                // Duration of animation
                duration: 200,
            })
            .on('progress', (e) => {
                ScrollHeroTitleDOM.style.opacity = -e.progress + 1
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

    &__background {
        // width: 100vw;
        // height: 180vh;
        overflow: hidden;

        img {
            width: 100%;
        }

        // background: url('../static/images/1.jpg');
        // background-position-x: 50%;
        // background-size: cover;
    }

    &__title {
        z-index: 1;
        position: fixed;
        top: 50%;

        width: 100%;

        font-size: 2rem;
        line-height: 150%;
        /* identical to box height, or 48px */
        text-align: center;
        letter-spacing: 0.05em;

        color: #ffffff;

        text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
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
        bottom: 20%;
        // background: gold;
        width: 100%;
        height: 10px;
        z-index: -1;
    }
}
</style>
