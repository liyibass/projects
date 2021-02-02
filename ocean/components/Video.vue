<template>
    <div class="Video" ref="videoRef" :style="{ height: `${wrapperHeight}px` }">
        <div class="Video__fix_wrapper">
            <div class="Video__fix_wrapper_youtube">
                <youtube
                    :video-id="videoId"
                    ref="youtube"
                    :fitParent="true"
                    :resize="true"
                ></youtube>
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
            isMobile: true,
            wrapperHeight: 'none',
            videoId: 'tcbSitsCx0c',
            playerVars: {
                autoplay: 1,
            },
        }
    },
    methods: {
        playVideo() {
            const oceanAudio = document.querySelector('.oceanAudio')
            oceanAudio.pause()
            console.log('video played')
            this.player.playVideo()
        },
        pauseVideo() {
            const oceanAudio = document.querySelector('.oceanAudio')
            oceanAudio.play()

            console.log('video paused')
            this.player.pauseVideo()
        },
        playing() {
            console.log('\o/ we are watching!!!')
        },
    },
    computed: {
        player() {
            return this.$refs.youtube.player
        },
    },
    mounted() {
        if (this.$refs.videoRef.clientWidth > 480) {
            this.isMobile = false
        } else {
            this.isMobile = true
        }

        // instantiate the scrollama
        const stickyYoutubeScroller = scrollama()
        const youtubeDOM = document.querySelector('.Video__fix_wrapper_youtube')
        // setup the instance, pass callback functions
        stickyYoutubeScroller
            .setup({
                step: '.Video',
                offset: 0,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                youtubeDOM.style.position = 'sticky'
                this.playVideo()
            })
            .onStepExit((response) => {
                // { element, index, direction }
                youtubeDOM.style.position = 'absolute'
                this.pauseVideo()
            })

        // setup resize event
        window.addEventListener('resize', stickyYoutubeScroller.resize)

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
.Video {
    z-index: 108;
    position: relative;

    &__fix_wrapper {
        position: relative;

        height: 200vh;
        width: 100%;
        background: black;
        // color: white;

        &_youtube {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
        }
    }
}
</style>
