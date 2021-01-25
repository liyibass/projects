<template>
    <div
        class="DivingDark"
        id="DivingDark"
        :style="{ height: `${wrapperHeight}px` }"
    >
        <div class="DivingDark__fix_wrapper">
            <div class="DivingDark__fix_wrapper_text">
                珊瑚礁正在哀唱，如煤礦坑裡的金絲雀。牠的衰弱不僅是牠生命的頹敗，更是海洋連結大氣變化的警示。當珊瑚礁完全死去，牠不再鮮豔、被藻類附生，如發霉腐爛的石塊，化為見證海洋受難的墓碑。但目前，牠們正正掙扎。艱困活著，等待聆聽。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wrapperHeight: 'none',
        }
    },
    mounted() {
        const DivingDarkWrapperDOM = document.querySelector(
            '.DivingDark__fix_wrapper'
        )

        const DivingDarkTextScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '#DivingDark',
                // Where to start trigger from element top
                offset: 0,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0,
                // Duration of animation
                duration: 1000,
            })
            .on('enter', (e) => {
                // this.maskOpacity = e.progress
                DivingDarkWrapperDOM.style.opacity = 1
                DivingDarkWrapperDOM.style.zIndex = 107
            })
            .on('leave', (e) => {
                // this.maskOpacity = e.progress
                DivingDarkWrapperDOM.style.opacity = 0
                DivingDarkWrapperDOM.style.zIndex = -1
            })

        // .addIndicators({ name: 'DivingDarkTextScene' })

        // -------------------------------------------------------
        // Handle fix component,hover by next component
        // need to define data.wrapperHeight
        // and assign it to parent's height
        let fixWrapperDOM
        const nextComponentClass = '.Video'
        const currentComponentWrapperClass = '.DivingDark__fix_wrapper'

        const fixAndHoverScene = this.$scrollmagic
            .scene({
                triggerElement: nextComponentClass,
                offset: 0,
                triggerHook: 1,
                duration: 1000,
            })
            .on('enter', (e) => {
                fixWrapperDOM = document.querySelector(
                    currentComponentWrapperClass
                )
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

        this.$scrollmagic.addScene([DivingDarkTextScene, fixAndHoverScene])
    },
}
</script>

<style lang="scss" scoped>
.DivingDark {
    z-index: 107;
    position: relative;
    width: 100%;
    height: 1000px;
    background: black;

    &__fix_wrapper {
        opacity: 0;
        transition: opacity 0.4s ease;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_text {
            color: #fdffff;

            font-size: 16px;
            line-height: 180%;
            /* or 29px */
            text-align: justify;

            max-width: 280px;
            margin: 0 20px;
        }
    }

    @include atSmall {
        &__fix_wrapper {
            &_text {
                max-width: none;
                width: 402px;
            }
        }
    }
}
</style>
