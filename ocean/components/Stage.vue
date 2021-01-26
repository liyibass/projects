<template>
    <div class="Stage" id="Stage" ref="stageRef">
        <!-- <div class="observer">{{ currentAnimate }}</div> -->
        <div class="Stage__background" ref="stageBackgroundRef">
            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="@/static/images/5.png"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        @/static/images/pad/5@1x.png 1x,
                        @/static/images/pad/5@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        @/static/images/mobile/5_v4@1x.png 1x,
                        @/static/images/mobile/5_v4@2x.png 2x
                        @/static/images/mobile/5_v4@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>

        <div class="Stage__main_pins_container">
            <Pin
                v-for="(pin, index) in mainPinList"
                :key="pin.id"
                :pin="pin"
                :focusState="generateFocusState(index)"
            />
        </div>

        <div class="Stage__tiny_pins_container" v-if="currentAnimate !== 6">
            <PinTiny v-for="pin in tinyPinList" :key="pin.id" :pin="pin" />
        </div>

        <transition name="fade">
            <div class="Stage__text" v-if="currentAnimate === 6">
                <div class="Stage__text_bar" />
                不只魚類，當海膽覓食，牠們的刺棘會擦過礁石，像人類腳步，喀噠喀噠；若尋獲海藻，開始啃食，牙齒則會與礁石摩擦，發出刮擦刮擦的聲響。
                <br />
                <br />
                如同人類，海洋生物也會靠聲音溝通，藉此劃定領域、吸引配偶，乃至尋覓自己適合生存的棲地。人類以為的沉默境地，其實萬分嘈雜。約有
                1/4 到 1/3
                的海洋物種，在生命週期需依賴珊瑚礁，使珊瑚礁區域成為海中生物多樣性最豐之處。探索、分辨珊瑚礁的聲音，成為
                Yannick 近幾年全心投入的事。
            </div>
        </transition>

        <div>{{ animateGenerater }}</div>

        <audio
            v-if="currentAnimate === 5"
            :src="require('@/static/audios/animal/all.mp3')"
            :autoplay="true"
            loop
        ></audio>

        <!-- <div class="Stage__anchor" /> -->
    </div>
</template>

<script>
import Pin from './Pin/Pin'
import PinTiny from './PinTiny/PinTiny'

import wave1 from '../static/images/waves/wave1.svg'
import wave2 from '../static/images/waves/wave2.svg'
import wave3 from '../static/images/waves/wave3.svg'
import wave4 from '../static/images/waves/wave4.svg'
import wave5 from '../static/images/waves/wave5.svg'
import wave6 from '../static/images/waves/wave6.svg'

import audio1 from '@/static/audios/animal/1.mp3'
import audio2 from '@/static/audios/animal/2.wav'
import audio3 from '@/static/audios/animal/3.mp3'

export default {
    components: {
        Pin,
        PinTiny,
    },
    data() {
        return {
            currentAnimate: 0,
            focusedPinIndex: 0,

            moveDistance: 100,
            mainPinList: [
                {
                    id: 1,
                    size: 'small',
                    image: '6-1',
                    waveImg: wave1,
                    name: '槍蝦',
                    englishName: 'Snapping shrimp',
                    audioUrl: audio1,
                    detail:
                        '全世界有上千種槍蝦，絕大多數生活在熱帶礁岩海底。槍蝦有一隻特化的螯，捕食時會將螯指快速闔上釋放空蝕氣泡。釋出的氣泡會因壓力而塌陷，產生的衝擊波可以震碎玻璃、擊暈獵物，發出響亮爆音。當一群槍蝦一齊發出聲響，甚至可以干擾海底聲納運作。',
                },
                {
                    id: 2,
                    size: 'large',
                    image: '6-2',
                    waveImg: wave2,
                    name: '金鱗魚',
                    englishName: 'Soldierfish',
                    audioUrl: audio2,
                    detail:
                        '又如金鱗魚科的魚是夜行性動物，白天常躲在洞穴内。若受干擾，會發出像啄木鳥啄木一樣的「dou-dou」聲響。',
                },
                {
                    id: 3,
                    size: 'mid',
                    image: '6-3',
                    waveImg: wave3,
                    name: '雀鯛',
                    englishName: 'Demselfish',
                    audioUrl: audio3,
                    detail:
                        '至於雀鯛科非常吵鬧。牠們是神經兮兮的守衛者，當有威脅逼近，就會嘰嘰叫囂宣示領域。然而雄魚求偶，卻會發出類似貓咪的撒嬌呼嚕。',
                },
            ],
            tinyPinList: [
                {
                    id: 1,
                    name: '槍蝦',
                    waveImg: wave1,
                    audioUrl: '',
                },
                {
                    id: 2,
                    name: '金鱗魚',
                    waveImg: wave2,
                    audioUrl: '',
                },
                {
                    id: 3,
                    name: '雀鯛',
                    waveImg: wave3,
                    audioUrl: '',
                },

                {
                    id: 4,
                    name: '日本松球魚',
                    waveImg: wave4,
                    audioUrl: '',
                },
                {
                    id: 5,
                    name: '擬金眼鯛',
                    waveImg: wave5,
                    audioUrl: '',
                },
                {
                    id: 6,
                    name: '海膽',
                    waveImg: wave6,
                    audioUrl: '',
                },
            ],
        }
    },
    computed: {
        animateGenerater() {
            switch (this.currentAnimate) {
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
                    break

                case 7:
                    // text fade out
                    break

                default:
                    break
            }
            return null
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
                        }, index * 300)
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
        const beachDOM = document.querySelector('.Beach')
        const stageBackgroundDOM = document.querySelector('.Stage__background')

        const stageScene = this.$scrollmagic
            .scene({
                triggerElement: '.Stage',
                offset: 0,
                triggerHook: 0,
                duration: 2500,
            })
            .setPin(stageDOM)
            .on('enter', () => {
                // Fetch moving distance
                const screenHeight = window.screen.height
                const backgroundImageHeight = this.$refs.stageBackgroundRef
                    .clientHeight

                this.moveDistance = backgroundImageHeight - screenHeight

                stageBackgroundDOM.style.bottom = `-${this.moveDistance - 5}px`
            })

            .on('leave', () => {
                stageBackgroundDOM.style.bottom = '0px'
                this.currentAnimate = 0
            })

            .on('progress', (e) => {
                if (e.progress > 0.01 && e.progress < 0.1) {
                    this.currentAnimate = 1
                } else if (e.progress > 0.1 && e.progress < 0.3) {
                    this.currentAnimate = 2
                } else if (e.progress > 0.3 && e.progress < 0.5) {
                    this.currentAnimate = 3
                } else if (e.progress > 0.5 && e.progress < 0.7) {
                    this.currentAnimate = 4
                } else if (e.progress > 0.7 && e.progress < 0.9) {
                    this.currentAnimate = 5
                } else if (e.progress > 0.9 && e.progress < 1) {
                    this.currentAnimate = 6
                } else if (e.progress === 1) {
                    this.currentAnimate = 7
                }
            })
        // .addIndicators({ name: 'stageScene' })
        this.$scrollmagic.addScene([stageScene])

        // const array = [
        //     223 + 24,
        //     16 + 24,
        //     84 + 18,
        //     64 + 18,
        //     209 + 32,
        //     241 + 32,
        //     292 + 32,
        //     104 + 32,
        //     128 + 24,
        //     157 + 24,
        //     358 + 18,
        //     212 + 18,
        // ]

        // array.forEach((item, index) => {
        //     if (index % 2 === 0) {
        //         console.log('top : ' + (item / 528) * 100 + '%')
        //     } else {
        //         console.log('left : ' + (item / 320) * 100 + '%')
        //         console.log('---------------')
        //     }
        // })
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
        width: 100%;
        transition: all 2s ease;
        position: absolute;
        // top: 0;
        bottom: 0px;

        img {
            width: 100%;
        }
        // position: fixed;

        margin-bottom: -5px;
    }

    &__text {
        position: absolute;
        top: 40%;
        // left: 50%;
        transform: translate(0%, -50%);

        margin: 0 20px;

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
