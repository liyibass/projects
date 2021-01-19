<template>
    <div class="Stage" id="Stage" ref="stageRef">
        <div class="Stage__background">
            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="../static/images/5.png"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        ../static/images/pad/5@1x.png 1x,
                        ../static/images/pad/5@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        ../static/images/mobile/5@1x.png 1x,
                        ../static/images/mobile/5@2x.png 2x,
                        ../static/images/mobile/5@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>

        <div class="Stage__container">
            <Pin v-for="pin in mainPinList" :key="pin.id" :pin="pin" />
        </div>

        <!-- <div class="Stage__anchor" /> -->
    </div>
</template>

<script>
import Pin from './Pin'
export default {
    components: {
        Pin,
    },
    data() {
        return {
            marginTop: 100,
            mainPinList: [
                {
                    id: 1,
                    image: '../static/images/6-1@1x.png',
                    name: '槍蝦',
                    englishName: 'Snapping shrimp',
                    audioUrl: '',
                    detail:
                        '全世界有上千種槍蝦，絕大多數生活在熱帶礁岩海底。槍蝦有一隻特化的螯，捕食時會將螯指快速闔上釋放空蝕氣泡。釋出的氣泡會因壓力而塌陷，產生的衝擊波可以震碎玻璃、擊暈獵物，發出響亮爆音。當一群槍蝦一齊發出聲響，甚至可以干擾海底聲納運作。',
                },
                {
                    id: 2,
                    image: '6-2',
                    name: '金鱗魚',
                    englishName: 'Soldierfish',
                    audioUrl: '',
                    detail:
                        '又如金鱗魚科的魚是夜行性動物，白天常躲在洞穴内。若受干擾，會發出像啄木鳥啄木一樣的「dou-dou」聲響。',
                },
                {
                    id: 3,
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
