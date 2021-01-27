<template>
    <div
        class="DivingDark"
        id="DivingDark"
        :style="{ height: `${wrapperHeight}px` }"
    >
        <div class="DivingDark__fix_wrapper"></div>
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
                duration: this.$el.clientHeight,
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
                fixWrapperDOM.style.opacity = 1
            })
            .on('leave', (e) => {
                // unfix css
                fixWrapperDOM.style.position = 'relative'
                fixWrapperDOM.style.opacity = 0
            })
        // .addIndicators({ name: 'fixDivingDarkScene' })

        // -------------------------------------------------------

        this.$scrollmagic.addScene([fixAndHoverScene])
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
        height: 100vh;
    }
}
</style>
