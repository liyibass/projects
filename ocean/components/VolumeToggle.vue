<template>
    <div class="VolumeToggle" id="VolumeToggle">
        <audio
            class="oceanAudio audio"
            :src="require('@/static/audios/ocean.mp3')"
            :isMuted="isMuted"
            loop
        >
            Your browser does not support the <code>audio</code> element.
        </audio>

        <transition name="fade">
            <div class="VolumeToggle__content" v-if="currentScene === 1">
                <div class="VolumeToggle__content_icon">
                    <!-- <img src="~/static/images/icon_mute_120x120.svg" alt="" /> -->
                    <VolumeIcon
                        :isMuted="isMuted"
                        :isMutedToggle="isMutedToggle"
                    />
                </div>

                <div class="VolumeToggle__content_text">
                    請點擊圖示開啟聲音<br />
                    獲得最佳閱讀體驗
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div
                class="VolumeToggle__content"
                id="VolumeToggle__content"
                v-if="currentScene === 2"
            >
                <div class="VolumeToggle__content_text">
                    閱讀過程中<br />點選圖示可關閉聲音
                </div>
            </div>
        </transition>

        <VolumeNavbar
            v-if="currentScene === 2"
            :isMuted="isMuted"
            :isMutedToggle="isMutedToggle"
            :forceShowIcon="forceShowIcon"
        />

        <div class="VolumeToggle__anchor" />
    </div>
</template>

<script>
import VolumeNavbar from '~/components/VolumeNavbar'

export default {
    components: {
        VolumeNavbar,
    },
    data() {
        return {
            isMuted: true,
            hasPlayedOnce: false,
            currentScene: 0,
            forceShowIcon: false,
        }
    },
    methods: {
        async isMutedToggle() {
            this.isMuted = !this.isMuted

            const oceanAudio = document.querySelector('.oceanAudio')

            if (this.isMuted === false) {
                const allAudio = document.querySelectorAll('.audio')

                if (this.hasPlayedOnce === false) {
                    // in order to play audio, need to activate all audio tag
                    // play all audio player with mute state,
                    allAudio.forEach((audio) => {
                        audio.muted = true
                        audio.play()
                        audio.pause()
                        audio.muted = false
                        console.log('unMute audio DOM')
                    })

                    this.hasPlayedOnce === true
                } else {
                    allAudio.forEach((audio) => {
                        audio.muted = false
                        console.log('unMute audio DOM')
                    })
                }

                console.log('==============')
                console.log('play ocean')
                oceanAudio.muted = false
                oceanAudio.play()
            } else {
                const allAudio = document.querySelectorAll('.audio')

                allAudio.forEach((audio) => {
                    audio.muted = true
                    audio.pause()
                })
            }
        },
    },
    mounted() {
        const VolumeToggleDOM = document.querySelector('#VolumeToggle')

        const VolumeToggleScene = this.$scrollmagic
            .scene({
                triggerElement: '#VolumeToggle',
                offset: 0.5,
                triggerHook: 0,
                duration: 1000,
            })
            .setPin(VolumeToggleDOM)
            .on('progress', (e) => {
                if (e.progress >= 0 && e.progress < 0.5) {
                    this.currentScene = 1
                } else if (e.progress >= 0.5 && e.progress <= 1) {
                    this.currentScene = 2
                }
            })
            // When viewport is in this page, volumeNavbar won't disappear
            .on('enter', () => {
                this.forceShowIcon = true
                VolumeToggleDOM.style.opacity = 1
            })
            .on('leave', () => {
                this.forceShowIcon = false
                // VolumeToggleDOM.style.opacity = 0
            })

        // .addIndicators({ name: 'VolumeToggleScene' })

        this.$scrollmagic.addScene([VolumeToggleScene])
    },
}
</script>

<style lang="scss" scoped>
.VolumeToggle {
    position: relative;
    height: 100vh;
    background: black;
    // background: gold;

    font-weight: 300;
    font-size: 18px;
    line-height: 140%;

    text-align: center;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__content {
        z-index: 0;
        // opacity: 0;
        transition: opacity 0.5s ease;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_icon {
            width: 120px;
            height: 120px;

            cursor: pointer;

            img {
                width: 100%;
            }
        }
        &_text {
            margin-top: 8px;
        }
    }

    #VolumeToggle__content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__anchor {
        // background: gold;
        width: 100%;
        height: 10px;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
