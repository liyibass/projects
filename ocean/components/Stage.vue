<template>
    <div class="Stage" id="Stage" ref="stageRef">
        <div class="Stage__background">
            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="../assets/images/5.png"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        ../assets/images/pad/5@1x.png 1x,
                        ../assets/images/pad/5@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        ../assets/images/mobile/5@1x.png 1x,
                        ../assets/images/mobile/5@2x.png 2x,
                        ../assets/images/mobile/5@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>

        <div class="Stage__container"></div>

        <!-- <div class="Stage__anchor" /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            marginTop: 100,
        }
    },
    mounted() {
        // const beachDOM = this.$refs.stageRef.previousElementSibling
        const stageDOM = document.querySelector('.Stage')
        const beachDOM = document.querySelector('.Beach')
        const stageBackgroundDOM = document.querySelector('.Stage__background')

        const stageScene = this.$scrollmagic
            .scene({
                triggerElement: '.Stage',
                offset: 0,
                triggerHook: 0,
                duration: 2000,
            })
            .setPin(stageDOM)
            .on('enter', () => {
                console.log('fix')
                stageBackgroundDOM.style.bottom = 0
            })

            .on('leave', () => {
                console.log('unfix')
                stageBackgroundDOM.style.bottom = '-150px'
            })
        // .addIndicators({ name: 'stageScene' })
        this.$scrollmagic.addScene([stageScene])
    },
}
</script>

<style lang="scss" scoped>
.Stage {
    z-index: 104;
    position: relative;
    background: white;
    height: 100vh;
    overflow: hidden;

    &__background {
        position: absolute;
        width: 100%;
        bottom: -150px;

        transition: all 1s ease;
        img {
            width: 100%;
        }
        // position: fixed;

        margin-bottom: -5px;
    }

    &__anchor {
        width: 100%;
        height: 10px;
        background: gold;
    }
}
</style>
