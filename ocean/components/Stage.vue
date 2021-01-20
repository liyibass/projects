<template>
    <div class="Stage" id="Stage" ref="stageRef">
        <div class="focus">{{ focusedPinIndex }}</div>
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

        <div class="Stage__container">
            <Pin
                v-for="(pin, index) in mainPinList"
                :key="pin.id"
                :pin="pin"
                :focusState="generateFocusState(index)"
            />
        </div>

        <!-- <div class="Stage__anchor" /> -->
    </div>
</template>

<script>
import Pin from './Pin/Pin'
export default {
    components: {
        Pin,
    },
    data() {
        return {
            focusedPinIndex: 0,
            moveDistance: 100,
            mainPinList: [
                {
                    id: 1,
                    size: 'small',
                    image: '6-1',
                    name: '槍蝦',
                    englishName: 'Snapping shrimp',
                    audioUrl: '',
                    detail:
                        '全世界有上千種槍蝦，絕大多數生活在熱帶礁岩海底。槍蝦有一隻特化的螯，捕食時會將螯指快速闔上釋放空蝕氣泡。釋出的氣泡會因壓力而塌陷，產生的衝擊波可以震碎玻璃、擊暈獵物，發出響亮爆音。當一群槍蝦一齊發出聲響，甚至可以干擾海底聲納運作。',
                },
                {
                    id: 2,
                    size: 'large',
                    image: '6-2',
                    name: '金鱗魚',
                    englishName: 'Soldierfish',
                    audioUrl: '',
                    detail:
                        '又如金鱗魚科的魚是夜行性動物，白天常躲在洞穴内。若受干擾，會發出像啄木鳥啄木一樣的「dou-dou」聲響。',
                },
                {
                    id: 3,
                    size: 'mid',
                    image: '6-3',
                    name: '雀鯛',
                    englishName: 'Demselfish',
                    audioUrl: '',
                    detail:
                        '至於雀鯛科非常吵鬧。牠們是神經兮兮的守衛者，當有威脅逼近，就會嘰嘰叫囂宣示領域。然而雄魚求偶，卻會發出類似貓咪的撒嬌呼嚕。',
                },
            ],
        }
    },
    methods: {
        pinsGrow(operation) {
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
        focusPin(focusedPinIndex) {
            const allPins = document.querySelectorAll('.Pin')

            //if property receive -1,then clear all pin's focus status
            // if (focusedPinIndex === -1) {
            //     allPins.forEach((pin, index) => {
            //         pin.classList.remove('Pin__focus')
            //         pin.classList.remove('Pin__unFocus')
            //     })

            //     return
            // }

            //if property has value 0~2 , then add corresponding className
            this.focusedPinIndex = focusedPinIndex
            // allPins.forEach((pin, index) => {
            //     if (index === focusedPinIndex) {
            //         pin.classList.remove('Pin__unFocus')
            //         pin.classList.add('Pin__focus')
            //     } else {
            //         pin.classList.remove('Pin__focus')
            //         pin.classList.add('Pin__unFocus')
            //     }
            // })
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
                duration: 3000,
            })
            .setPin(stageDOM)
            .on('enter', () => {
                // Fetch moving distance
                const screenHeight = window.screen.height
                const backgroundImageHeight = this.$refs.stageBackgroundRef
                    .clientHeight

                this.moveDistance = backgroundImageHeight - screenHeight

                console.log('fix')
                stageBackgroundDOM.style.bottom = `-${this.moveDistance - 5}px`
            })

            .on('leave', () => {
                console.log('unfix')
                stageBackgroundDOM.style.bottom = '0px'
            })

            .on('progress', (e) => {
                if (e.progress > 0.01) {
                    this.pinsGrow('on')
                } else {
                    this.pinsGrow('off')
                    this.focusPin(-1)

                    return
                }

                if (e.progress > 0.1 && e.progress < 0.3) {
                    this.focusPin(0)
                } else if (e.progress > 0.3 && e.progress < 0.5) {
                    this.focusPin(1)
                } else if (e.progress > 0.5 && e.progress < 0.7) {
                    this.focusPin(2)
                } else {
                    this.focusPin(-1)
                }
            })
        // .addIndicators({ name: 'stageScene' })
        this.$scrollmagic.addScene([stageScene])
    },
}
</script>

<style lang="scss" scoped>
.focus {
    width: 20px;
    height: 20px;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    border: 1px solid red;
    z-index: 99999;

    text-align: center;
    line-height: 20px;
}
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

    &__anchor {
        width: 100%;
        height: 10px;
        background: gold;
    }
}
</style>
