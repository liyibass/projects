<template>
    <div class="Stage" id="Stage" ref="stageRef">
        <!-- <div class="observer">{{ currentAnimate }}</div> -->
        <div class="Stage__background" ref="stageBackgroundRef">
            <LongImage image="5" :zoom="true" />
        </div>

        <div class="Stage__main_pins_container">
            <Pin
                v-for="(pin, index) in mainPinList"
                :key="pin.id"
                :pin="pin"
                :focusState="generateFocusState(index)"
            />
        </div>

        <div class="Stage__tiny_pins_container">
            <PinTiny v-for="pin in tinyPinList" :key="pin.id" :pin="pin" />
        </div>

        <transition name="fade">
            <div class="Stage__text" v-if="currentAnimate === 6">
                <div class="Stage__text_bar" />
                不只魚類，當海膽覓食，牠們的刺棘會擦過礁石，像人類腳步，喀噠喀噠；若尋獲海藻，開始啃食，牙齒則會與礁石摩擦，發出刮擦刮擦的聲響。
                <br />
                <br />
                如同人類，海洋生物也會靠聲音溝通，藉此劃定領域、吸引配偶，乃至尋覓適合生存的棲地。人類以為的沉默境地，其實萬分嘈雜。約有
                1/4 到 1/3
                的海洋物種，在生命週期需依賴珊瑚礁，使珊瑚礁區域成為海中生物多樣性最豐之處。探索、分辨珊瑚礁的聲音，成為
                Yannick 近幾年全心投入的事。
            </div>
        </transition>

        <!-- <div>{{ animateGenerater }}</div> -->

        <audio
            class="audio_all audio"
            :src="require('@/static/audios/animal/all.mp3')"
            :loop="true"
        ></audio>
    </div>
</template>

<script>
import Pin from './Pin/Pin'
import PinTiny from './PinTiny/PinTiny'
import LongImage from './LongImage'

import wave1 from '../static/images/waves/wave1.svg'
import wave2 from '../static/images/waves/wave2.svg'
import wave3 from '../static/images/waves/wave3.svg'
import wave4 from '../static/images/waves/wave4.svg'
import wave5 from '../static/images/waves/wave5.svg'
import wave6 from '../static/images/waves/wave6.svg'

export default {
    components: {
        Pin,
        PinTiny,
        LongImage,
    },
    data() {
        return {
            currentAnimate: 0,
            focusedPinIndex: 0,
            translateRatio: 30,

            mainPinList: [
                {
                    id: 0,
                    size: 'small',
                    image: '6-1',
                    waveImg: wave1,
                    name: '槍蝦',
                    englishName: 'Snapping shrimp',
                    audioUrl: require('@/static/audios/animal/1.mp3'),
                    duration: 11,
                    detail:
                        '全世界有上千種槍蝦，絕大多數生活在熱帶礁岩海底。槍蝦有一隻特化的螯，捕食時會將螯指快速闔上釋放空蝕氣泡。釋出的氣泡會因壓力而塌陷，產生的衝擊波可以震碎玻璃、擊暈獵物，發出響亮爆音。當一群槍蝦一齊發出聲響，甚至可以干擾海底聲納運作。',
                },
                {
                    id: 1,
                    size: 'large',
                    image: '6-2',
                    waveImg: wave2,
                    name: '金鱗魚',
                    englishName: 'Soldierfish',
                    audioUrl: require('@/static/audios/animal/2.mp3'),
                    duration: 12,
                    detail:
                        '又如金鱗魚科的魚是夜行性動物，白天常躲在洞穴内。若受干擾，會發出像啄木鳥啄木一樣的「dou-dou」聲響。',
                },
                {
                    id: 2,
                    size: 'mid',
                    image: '6-3',
                    waveImg: wave3,
                    name: '雀鯛',
                    englishName: 'Demselfish',
                    audioUrl: require('@/static/audios/animal/3.mp3'),
                    duration: 11,
                    detail:
                        '至於雀鯛科非常吵鬧。牠們是神經兮兮的守衛者，當有威脅逼近，就會嘰嘰叫囂宣示領域。然而雄魚求偶，卻會發出類似貓咪的撒嬌呼嚕。',
                },
            ],
            tinyPinList: [
                {
                    id: 0,
                    name: '槍蝦',
                    waveImg: wave1,
                    audioUrl: '',
                    duration: 11,
                },
                {
                    id: 1,
                    name: '金鱗魚',
                    waveImg: wave2,
                    audioUrl: '',
                    duration: 12,
                },
                {
                    id: 2,
                    name: '雀鯛',
                    waveImg: wave3,
                    audioUrl: '',
                    duration: 11,
                },

                {
                    id: 3,
                    name: '日本松球魚',
                    waveImg: wave4,
                    audioUrl: '',
                    duration: 11,
                },
                {
                    id: 4,
                    name: '擬金眼鯛',
                    waveImg: wave5,
                    audioUrl: '',
                    duration: 11,
                },
                {
                    id: 5,
                    name: '海膽',
                    waveImg: wave6,
                    audioUrl: '',
                    duration: 11,
                },
                {
                    id: 6,
                },
                {
                    id: 7,
                },
                {
                    id: 8,
                },
            ],
        }
    },

    watch: {
        currentAnimate: function(newCurrentAnimate, oldCurrentAnimate) {
            switch (newCurrentAnimate) {
                case 0:
                    this.mainPinsGrow('off')
                    this.focusPin(-1)
                    break

                case 1:
                    this.mainPinsGrow('on')
                    this.focusPin(-1)
                    break

                case 2:
                    this.focusPin(0)
                    this.tinyPinsGrow('off')

                    break

                case 3:
                    this.focusPin(1)
                    this.tinyPinsGrow('off')

                    break

                case 4:
                    this.focusPin(2)
                    this.mainPinsGrow('on')
                    this.tinyPinsGrow('off')
                    break

                case 5:
                    this.focusPin(-1)
                    this.mainPinsGrow('off')
                    this.tinyPinsGrow('on')

                    break

                case 6:
                    this.tinyPinsGrow('off')
                    this.mainPinsGrow('off')

                    break

                case 7:
                    // text fade out
                    break

                default:
                    break
            }
        },
    },
    methods: {
        mainPinsGrow(operation) {
            const allPins = document.querySelectorAll('.Pin')

            switch (operation) {
                case 'on':
                    allPins.forEach((pin, index) => {
                        setTimeout(() => {
                            pin.classList.remove('Pin__readyToGrow')
                        }, index * 300)
                    })
                    break

                case 'off':
                    allPins.forEach((pin, index) => {
                        setTimeout(() => {
                            pin.classList.add('Pin__readyToGrow')
                        }, index * 300)
                    })
                    break

                default:
                    break
            }
        },
        tinyPinsGrow(operation) {
            const allPins = document.querySelectorAll('.PinTiny')

            switch (operation) {
                case 'on':
                    allPins.forEach((pin, index) => {
                        setTimeout(() => {
                            pin.classList.remove('PinTiny__readyToGrow')
                            pin.classList.add('animate_start')
                        }, index * 200)
                    })
                    break

                case 'off':
                    allPins.forEach((pin, index) => {
                        pin.classList.remove('animate_start')
                        pin.classList.add('PinTiny__readyToGrow')
                    })
                    break

                default:
                    break
            }
        },
        focusPin(focusedPinIndex) {
            this.focusedPinIndex = focusedPinIndex
        },

        generateFocusState(pinIndex) {
            if (this.focusedPinIndex === -1) return 'null'

            if (pinIndex === this.focusedPinIndex) {
                return 'focus'
            } else {
                return 'unFocus'
            }
        },
    },

    mounted() {
        // const beachDOM = this.$refs.stageRef.previousElementSibling
        const stageDOM = document.querySelector('.Stage')
        const stageBackgroundDOM = document.querySelector('.Stage__background')
        const oceanAudioDOM = document.querySelector('.oceanAudio')

        // Fetch moving distance
        const screenHeight = window.innerHeight
        const backgroundImageHeight = this.$refs.stageBackgroundRef.clientHeight
        const translateRatio =
            ((backgroundImageHeight - screenHeight) / backgroundImageHeight) * 100
        this.translateRatio = translateRatio
        stageBackgroundDOM.style.transform = `translate(0%,-20%)`

        const stageScene = this.$scrollmagic
            .scene({
                triggerElement: '.Stage',
                offset: 0,
                triggerHook: 0,
                duration: 6000,
            })
            .setPin(stageDOM)
            .on('enter', () => {
                console.log('Stage in')

                stageBackgroundDOM.style.transform = `translate(0%,0%)`

                // turn ocean audio volume down
                oceanAudioDOM.volume = 0.5
            })

            .on('leave', () => {
                console.log('Stage out')
                // stageBackgroundDOM.style.transform = `translate(-50%,-${this.translateRatio}%)`
                stageBackgroundDOM.style.transform = `translate(0%,-20%)`

                this.currentAnimate = 0

                // turn ocean audio volume back to
                oceanAudioDOM.volume = 1
            })

            .on('progress', (e) => {
                if (e.progress > 0.01 && e.progress < 0.1) {
                    this.currentAnimate = 1
                } else if (e.progress > 0.1 && e.progress < 0.25) {
                    this.currentAnimate = 2
                } else if (e.progress > 0.25 && e.progress < 0.4) {
                    this.currentAnimate = 3
                } else if (e.progress > 0.4 && e.progress < 0.55) {
                    this.currentAnimate = 4
                } else if (e.progress > 0.55 && e.progress < 0.75) {
                    this.currentAnimate = 5
                } else if (e.progress > 0.75 && e.progress < 1) {
                    this.currentAnimate = 6
                } else if (e.progress === 1) {
                    this.currentAnimate = 7
                }
            })
        // .addIndicators({ name: 'stageScene' })
        this.$scrollmagic.addScene([stageScene])
    },

    updated() {
        const audioAllDOM = document.querySelector('.audio_all')
        if (this.currentAnimate === 5) {
            audioAllDOM.play()
        } else {
            audioAllDOM.pause()
        }
    },
}
</script>

<style lang="scss" scoped>
.Stage {
    z-index: 104;
    position: relative;
    // background: white;

    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__background {
        width: 100%;
        transition: all 2s ease;
        transform: translate(0%, -20%);

        margin-bottom: -5px;
    }

    // @include atSuperLarge {
    //     &__background {
    //         // width: 100vw;
    //         // height: 180vh;
    //         overflow: hidden;
    //         display: block;
    //     }
    // }

    &__text {
        position: absolute;
        top: 40%;
        // left: 50%;
        transform: translate(0%, -50%);

        padding: 0 20px;

        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        text-align: justify;

        color: #ffffff;

        opacity: 0.8;

        &_bar {
            border-top: 0.25px solid #fdffff;
            width: 92px;
            height: 0px;
            margin-bottom: 16px;
        }

        @include atSmall {
            top: 11.719%;
            width: 402px;
            left: 50%;
            transform: translate(-50%, 0%);
            margin: 0;
        }

        @include atMedium {
            top: 16.79%;
        }
    }

    &__anchor {
        width: 100%;
        height: 10px;
        background: gold;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
