<template>
    <div class="DivingDark" id="DivingDark" :style="{ height: `${wrapperHeight}px` }">
        <div class="DivingDark__fix_wrapper">
            <div class="DivingDark__fix_wrapper_content">
                <div class="DivingDark__fix_wrapper_content_text">
                    <div class="DivingDark__fix_wrapper_content_text_bar" />
                    <span>
                        生物離開，因爲牠們聆聽的「聲音」，是一全幅、具有脈絡、彼此關聯的生命景象。那是 Yannick 所說——
                    </span>
                    <br />
                    <br />
                    <span>
                        珊瑚礁正在哀唱，如煤礦坑裡的金絲雀。牠的衰弱不僅是牠生命的頹敗，更是海洋連結大氣變化的警示。當珊瑚礁完全死去，牠不再鮮豔、被藻類附生，如發霉腐爛的石塊，化為見證海洋受難的墓碑。但目前，牠們正正掙扎。艱困活著，等待聆聽。
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'
export default {
    data() {
        return {
            wrapperHeight: 'none',
        }
    },
    mounted() {
        const stickyDivingDarkScroller = scrollama()
        const contentDOM = document.querySelector('.DivingDark__fix_wrapper_content')

        stickyDivingDarkScroller
            .setup({
                step: '.DivingDark',
                offset: 0,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                contentDOM.style.position = 'fixed'
                contentDOM.style.opacity = 1
            })
            .onStepExit((response) => {
                // { element, index, direction }
                contentDOM.style.position = 'absolute'
                contentDOM.style.opacity = 0
            })

        // setup resize event
        window.addEventListener('resize', stickyDivingDarkScroller.resize)
        // -------------------------------------------------------
        // Handle fix component,hover by next component
        // need to define data.wrapperHeight
        // and assign it to parent's height
        let fixWrapperDOM
        const nextComponentClass = '.Video'
        const currentComponentWrapperClass = '.DivingDark__fix_wrapper'

        // const fixAndHoverScene = this.$scrollmagic
        //     .scene({
        //         triggerElement: nextComponentClass,
        //         offset: 0,
        //         triggerHook: 1,
        //         duration: this.$el.clientHeight,
        //     })
        //     .on('enter', (e) => {
        //         fixWrapperDOM = document.querySelector(currentComponentWrapperClass)
        //         // get wrapper's height,then assign to parient
        //         this.wrapperHeight = fixWrapperDOM.clientHeight
        //         // fix css
        //         fixWrapperDOM.style.position = 'fixed'
        //         fixWrapperDOM.style.width = '100%'
        //         fixWrapperDOM.style.bottom = '0px'
        //         fixWrapperDOM.style.opacity = 1
        //     })
        //     .on('leave', (e) => {
        //         // unfix css
        //         fixWrapperDOM.style.position = 'relative'
        //         fixWrapperDOM.style.opacity = 0
        //     })
        // // .addIndicators({ name: 'fixDivingDarkScene' })

        // // -------------------------------------------------------

        // this.$scrollmagic.addScene([fixAndHoverScene])
        // this.$scrollmagic.addScene([DivingDarkTextScene, fixAndHoverScene])
    },
}
</script>

<style lang="scss" scoped>
.DivingDark {
    z-index: 105;
    position: relative;
    width: 100%;
    background: black;
    // background: gold;

    &__fix_wrapper {
        height: 150vh;
        color: white;

        &_content {
            opacity: 0;
            transition: opacity 0.5s ease;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &_text {
                color: white;

                width: 100%;

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
        }
    }

    @include atSmall {
        &__fix_wrapper {
            &_content {
                &_text {
                    max-width: none;
                    width: 402px;
                    margin: 0;

                    &_bar {
                        width: 100.5px;
                    }
                }
            }
        }
    }
}
</style>
