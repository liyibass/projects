<template>
    <div class="Diving" id="Diving">
        <div class="Diving__wrapper">
            <div class="Diving__wrapper_background">
                <picture>
                    <source
                        media="(min-width:760px)"
                        srcset="../static/images/20.jpg"
                        alt="ocean"
                    />
                    <source
                        media="(min-width:480px)"
                        srcset="
                            ../static/images/pad/20@1x.png 1x,
                            ../static/images/pad/20@2x.png 2x
                        "
                        alt="ocean"
                    />

                    <img
                        srcset="
                            ../static/images/mobile/20@1x.png 1x,
                            ../static/images/mobile/20@2x.png 2x,
                            ../static/images/mobile/20@3x.png 3x
                        "
                        alt="ocean"
                    />
                </picture>
            </div>

            <div class="Diving__wrapper_text">
                「因為有光，所以我們能看見東西。聲音是光。我所聽的是『聲音』——在聲音裡我聽到孩子玩耍、聽到冰箱馬達震動、兔子奔跑。聲音是光。我不是在聽這個東西的『聲音』。我是在聲音裡面聆聽。」
            </div>
        </div>
        <div class="Diving__mask" />
    </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
    data() {
        return {}
    },
    mounted() {
        const DivingMaskDOM = document.querySelector('.Diving__mask')
        const DivingWrapperDOM = document.querySelector('.Diving__wrapper')

        // Declare Scene
        const backgroundDarkScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '#Diving',
                // Where to start trigger from element top
                offset: 0,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0,
                // Duration of animation
                duration: 800,
            })
            .setPin(DivingWrapperDOM)
            .on('progress', (e) => {
                DivingMaskDOM.style.opacity = e.progress
            })
        // .addIndicators({ name: 'backgroundDarkScene' })

        this.$scrollmagic.addScene(backgroundDarkScene)
    },
}
</script>

<style lang="scss" scoped>
.Diving {
    z-index: 106;
    position: relative;
    background: black;

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

    &__wrapper {
        &_background {
            overflow: hidden;
            height: 100vh;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
            }
        }
        &_text {
            opacity: 1;
            color: #fdffff;

            font-size: 16px;
            line-height: 180%;
            /* or 29px */
            text-align: justify;

            position: absolute;
            top: 4.82%;
            left: 6.25%;

            border-left: 1px solid white;
            padding-left: 16px;

            width: 240px;
        }
    }

    @include atSmall {
        &__wrapper {
            &_text {
                top: 11.352%;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;

                border-left: none;
                padding-left: 0;
                border-top: 1px solid white;
                padding-top: 16px;
            }
        }

        &__wrapper2 {
            &_text {
                max-width: none;
                width: 402px;
            }
        }
    }

    @include atMedium {
        &__wrapper {
            &_text {
                top: 28.571%;
                left: 9.091%;

                width: 427px;

                border-top: none;
                padding-top: 0;
                transform: none;

                border-left: 1px solid white;
                padding-left: 16px;
            }
        }
    }
}
</style>
