<template>
    <div class="Beach" id="Beach" ref="beachRef" :style="{ height: `${wrapperHeight}px` }">
        <div class="Beach__fix_wrapper">
            <div class="Beach__background">
                <LongImage image="3" :zoom="false" />
                <!-- <picture>
                    <source media="(min-width:760px)" srcset="../static/images/3.png" alt="ocean" />
                    <source
                        media="(min-width:480px)"
                        srcset="../static/images/pad/3@1x.png 1x, ../static/images/pad/3@2x.png 2x"
                        alt="ocean"
                    />

                    <img
                        srcset="
                            ../static/images/mobile/3@1x.png 1x,
                            ../static/images/mobile/3@2x.png 2x,
                            ../static/images/mobile/3@3x.png 3x
                        "
                        alt="ocean"
                    />
                </picture> -->
            </div>

            <div class="Beach__text1 hide_text">
                「因為有光，所以我們能看見東西。聲音是光。我所聽的是『聲音』——在聲音裡我聽到孩子玩耍、聽到冰箱馬達震動、兔子奔跑。聲音是光。我不是在聽這個東西的『聲音』。我是在聲音裡面聆聽。」
            </div>
        </div>
    </div>
</template>

<script>
import LongImage from './LongImage'

import 'intersection-observer'
import scrollama from 'scrollama'

export default {
    components: {
        LongImage,
    },
    data() {
        return {
            wrapperHeight: 'none',
            isPlayedAudio: false,
        }
    },
    async mounted() {
        // when first toggle volume icon, audio wont play
        // so here handle first play ocean audio
        const scroller = scrollama()
        scroller
            .setup({
                step: '.Beach',
                offset: 0.5,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                if (this.isPlayedAudio === false) {
                    const oceanAudio = document.querySelector('.oceanAudio')
                    oceanAudio.play()
                    this.isPlayedAudio === true
                }
            })

        // setup resize event
        window.addEventListener('resize', scroller.resize)

        // // -------------------------------------------------------
        // // Handle fix component,hover by next component
        // // need to define data.wrapperHeight
        // // and assign it to parent's height
        // let fixWrapperDOM
        // const nextComponentClass = '.Diving'
        // const currentComponentWrapperClass = '.Beach__fix_wrapper'

        // const fixAndHoverScene = this.$scrollmagic
        //     .scene({
        //         triggerElement: nextComponentClass,
        //         offset: 0,
        //         triggerHook: 1,
        //         duration: 1000,
        //     })
        //     .on('enter', (e) => {
        //         fixWrapperDOM = document.querySelector(currentComponentWrapperClass)
        //         // get wrapper's height,then assign to parient
        //         this.wrapperHeight = fixWrapperDOM.clientHeight
        //         // fix css
        //         fixWrapperDOM.style.position = 'fixed'
        //         fixWrapperDOM.style.width = '100%'
        //         fixWrapperDOM.style.bottom = '0px'
        //     })
        //     .on('leave', (e) => {
        //         // unfix css
        //         fixWrapperDOM.style.position = 'relative'
        //     })
        // // .addIndicators({ name: 'fixStoryScene' })

        // // -------------------------------------------------------

        // this.$scrollmagic.addScene([fixAndHoverScene])
    },
}
</script>

<style lang="scss" scoped>
.Beach {
    z-index: 103;
    position: relative;
    background: white;

    font-size: 1rem;
    line-height: 180%;
    text-align: justify;

    &__background {
        height: 100vh;
    }

    &__text1 {
        transition: opacity 0.5s ease;
        color: #fdffff;

        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        text-align: justify;

        position: absolute;
        top: 3.218%;
        left: 6.79%;

        border-left: 1px solid white;
        padding-left: 16px;

        width: 240px;
    }

    &__fix_wrapper {
        // padding-bottom: 32px;
    }

    @include atSmall {
        &__text1 {
            top: 6.344%;
            left: 5.202%;

            width: 400px;
        }

        &__fix_wrapper {
            // padding-bottom: 48px;
        }
    }

    @include atMedium {
        &__text1 {
            top: 13.758%;
            left: 9.098%;

            width: 427px;
        }
    }
}
</style>
