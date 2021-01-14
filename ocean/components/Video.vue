<template>
    <div class="Video" ref="videoRef" :style="{ height: `${wrapperHeight}px` }">
        <!-- <video class="Video__video" playsinline> -->
        <!-- <source v-if="isMobile" src="~/static/videos/people_mobile.mp4" />
            <source v-else src="~/static/videos/people.mp4" /> -->
        <!-- </video> -->

        <div class="Video__fix_wrapper">
            <h1>Video</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: true,
            wrapperHeight: 'none',
        }
    },
    mounted() {
        if (this.$refs.videoRef.clientWidth > 480) {
            this.isMobile = false
        } else {
            this.isMobile = true
        }

        // -------------------------------------------------------
        // Handle fix component,hover by next component
        // need to define data.wrapperHeight
        // and assign it to parent's height
        let fixWrapperDOM
        const nextComponentClass = '.Final'
        const currentComponentWrapperClass = '.Video__fix_wrapper'

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

    methods: {
        // toggleVolume() {
        //     if (this.isMuted === true) {
        //         this.gaClickHandler('sound')
        //     }
        //     this.isMuted = !this.isMuted
        // },
    },
}
</script>

<style lang="scss" scoped>
.Video {
    z-index: 108;
    position: relative;

    &__fix_wrapper {
        position: relative;

        height: 100vh;
        width: 100%;
        background: darkslategrey;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
