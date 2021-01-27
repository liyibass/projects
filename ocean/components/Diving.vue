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

            <div class="Diving__wrapper_text hide_text">
                「因為有光，所以我們能看見東西。聲音是光。我所聽的是『聲音』——在聲音裡我聽到孩子玩耍、聽到冰箱馬達震動、兔子奔跑。聲音是光。我不是在聽這個東西的『聲音』。我是在聲音裡面聆聽。」
            </div>
        </div>
        <div class="Diving__mask" />

        <div class="Diving__dark_text">
            <div class="Diving__dark_text_bar" />
            珊瑚礁正在哀唱，如煤礦坑裡的金絲雀。牠的衰弱不僅是牠生命的頹敗，更是海洋連結大氣變化的警示。當珊瑚礁完全死去，牠不再鮮豔、被藻類附生，如發霉腐爛的石塊，化為見證海洋受難的墓碑。但目前，牠們正正掙扎。艱困活著，等待聆聽。
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        const DivingMaskDOM = document.querySelector('.Diving__mask')
        const DivingWrapperDOM = document.querySelector('.Diving__wrapper')
        const DivingDarkTextDOM = document.querySelector('.Diving__dark_text')

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

        const darkTextScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '#Diving',
                // Where to start trigger from element top
                offset: 800,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0,
                // Duration of animation
                duration: 200,
            })
            .on('progress', (e) => {
                DivingDarkTextDOM.style.opacity = e.progress
            })
        // .addIndicators({ name: 'darkTextScene' })

        const darkTextPositonScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '#Diving',
                // Where to start trigger from element top
                offset: 500,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0,
                // Duration of animation
                duration: 2000,
            })
            .on('enter', (e) => {
                DivingDarkTextDOM.style.position = 'fixed'
            })
            .on('leave', (e) => {
                DivingDarkTextDOM.style.position = 'absolute'
            })
        // .addIndicators({ name: 'darkTextPositionScene' })

        this.$scrollmagic.addScene([
            backgroundDarkScene,
            darkTextScene,
            darkTextPositonScene,
        ])
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

    &__dark_text {
        opacity: 0;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);

        color: #fdffff;

        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        text-align: justify;

        max-width: 280px;

        &_bar {
            width: 92px;
            height: 0px;

            /* White */
            border: 0.25px solid #fdffff;
            margin-bottom: 16px;
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

        &__dark_text {
            max-width: none;
            width: 402px;
            margin: 0;

            &_bar {
                width: 100.5px;
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
