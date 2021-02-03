<template>
    <div class="Diving" id="Diving" :style="{ height: `${wrapperHeight}px` }">
        <div class="Diving__fix_wrapper">
            <div class="Diving__wrapper">
                <div class="Diving__wrapper_background">
                    <LongImage image="20" :zoom="true" />
                </div>

                <div class="Diving__wrapper_text hide_text">
                    「妳注意過電影如何呈現人類在水下聽見的聲音嗎？」聲音藝術家 Yannick Dauby
                    說：「總是咕嚕咕嚕。」但那是不正確的，「咕嚕咕嚕是人背著氣瓶下水時發出的呼息，而非海洋的聲音。」
                </div>
            </div>
            <!-- <div class="Diving__mask" />

        <div class="Diving__dark_text">
            <div class="Diving__dark_text_bar" />
            Yannick
            領我走進書房，點開電腦中的音檔，房間隨後環繞一塊油脂豐滿的三層肉在鍋裡煎熬的劈啪聲響。然那並非油花彈跳，而是他利用特製水下錄音器材捕捉到的槍蝦聲音。
        </div> -->
            <WhiteBlock />
        </div>
    </div>
</template>

<script>
import LongImage from './LongImage'
import WhiteBlock from './WhiteBlock'

export default {
    components: {
        LongImage,
        WhiteBlock,
    },
    data() {
        return {
            wrapperHeight: 'none',
        }
    },
    mounted() {
        // const DivingMaskDOM = document.querySelector('.Diving__mask')
        // const DivingWrapperDOM = document.querySelector('.Diving__wrapper')
        // const DivingDarkTextDOM = document.querySelector('.Diving__dark_text')
        // // Declare Scene
        // const backgroundDarkScene = this.$scrollmagic
        //     .scene({
        //         // ID of element where animation starts
        //         triggerElement: '#Diving',
        //         // Where to start trigger from element top
        //         offset: 0,
        //         // {0,0.5,1} - animations starts from {top,center,end} of window
        //         triggerHook: 0,
        //         // Duration of animation
        //         duration: 800,
        //     })
        //     .setPin(DivingWrapperDOM)
        //     .on('progress', (e) => {
        //         DivingMaskDOM.style.opacity = e.progress
        //     })
        // // .addIndicators({ name: 'backgroundDarkScene' })
        // const darkTextScene = this.$scrollmagic
        //     .scene({
        //         // ID of element where animation starts
        //         triggerElement: '#Diving',
        //         // Where to start trigger from element top
        //         offset: 800,
        //         // {0,0.5,1} - animations starts from {top,center,end} of window
        //         triggerHook: 0,
        //         // Duration of animation
        //         duration: 200,
        //     })
        //     .on('progress', (e) => {
        //         DivingDarkTextDOM.style.opacity = e.progress
        //     })
        // // .addIndicators({ name: 'darkTextScene' })
        // const darkTextPositonScene = this.$scrollmagic
        //     .scene({
        //         // ID of element where animation starts
        //         triggerElement: '#Diving',
        //         // Where to start trigger from element top
        //         offset: 500,
        //         // {0,0.5,1} - animations starts from {top,center,end} of window
        //         triggerHook: 0,
        //         // Duration of animation
        //         duration: 2000,
        //     })
        //     .on('enter', (e) => {
        //         DivingDarkTextDOM.style.position = 'fixed'
        //     })
        //     .on('leave', (e) => {
        //         DivingDarkTextDOM.style.position = 'absolute'
        //     })
        // // .addIndicators({ name: 'darkTextPositionScene' })
        // this.$scrollmagic.addScene([backgroundDarkScene, darkTextScene, darkTextPositonScene])

        // -------------------------------------------------------
        // Handle fix component,hover by next component
        // need to define data.wrapperHeight
        // and assign it to parent's height
        let fixWrapperDOM
        const nextComponentClass = '.Stage'
        const currentComponentWrapperClass = '.Diving__fix_wrapper'

        const fixAndHoverScene = this.$scrollmagic
            .scene({
                triggerElement: nextComponentClass,
                offset: 0,
                triggerHook: 1,
                duration: 1000,
            })
            .on('enter', (e) => {
                fixWrapperDOM = document.querySelector(currentComponentWrapperClass)
                // get wrapper's height,then assign to parient
                this.wrapperHeight = fixWrapperDOM.clientHeight
                // fix css
                fixWrapperDOM.style.position = 'fixed'
                fixWrapperDOM.style.width = '100%'
                fixWrapperDOM.style.bottom = '0px'
            })
            .on('leave', (e) => {
                // unfix css
                fixWrapperDOM.style.position = 'relative'
            })
        // .addIndicators({ name: 'fixStoryScene' })

        // -------------------------------------------------------

        this.$scrollmagic.addScene([fixAndHoverScene])
    },
}
</script>

<style lang="scss" scoped>
.Diving {
    z-index: 103;
    position: relative;
    background: white;

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

    .Diving__wrapper {
        &_text {
            transition: opacity 0.5s ease;
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
        .Diving__wrapper {
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
        .Diving__wrapper {
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
