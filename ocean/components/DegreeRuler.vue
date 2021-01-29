<template>
    <div class="DegreeRuler">
        <!-- <div class="observer">{{ scaleIndex }}</div> -->

        <div class="DegreeRuler__navbar">
            <DegreeBlock
                :year="yearDegreeList[scaleIndex].year"
                :degree="yearDegreeList[scaleIndex].degree"
                :isFocused="true"
            />
        </div>
        <div class="DegreeRuler__railway" ref="railwayRef">
            <div
                class="DegreeRuler__scale_block"
                v-for="(degreeBlock, index) in yearDegreeList"
                :key="index"
                :class="`DegreeRuler__scale_block${index}`"
            >
                <div class="normal_bar" />
                <DegreeBlock
                    :year="yearDegreeList[index].year"
                    :degree="yearDegreeList[index].degree"
                    :isFocused="index === scaleIndex ? true : false"
                />
            </div>

            <div class="mobile_bar" />
        </div>

        <audio class="audio degreeRulerAudio1" :src="audioSrc1" />
        <audio class="audio degreeRulerAudio2" :src="audioSrc2" />
        <audio class="audio degreeRulerAudio3" :src="audioSrc3" />
        <audio class="audio degreeRulerAudio4" :src="audioSrc4" />
    </div>
</template>

<script>
import DegreeBlock from '~/components/DegreeBlock'
import yearDegreeMixin from '~/mixins/yearDegreeMixin'

import 'intersection-observer'
import scrollama from 'scrollama'

export default {
    props: [],
    mixins: [yearDegreeMixin],

    components: {
        DegreeBlock,
    },

    data() {
        return {
            scaleIndex: 0,
            railwayInterval: 100,
            isNotMobile: 1,
            audioSrc1: require('@/static/audios/temp/1958.mp3'),
            audioSrc2: require('@/static/audios/temp/1959.mp3'),
            audioSrc3: require('@/static/audios/temp/1960.mp3'),
            audioSrc4: require('@/static/audios/temp/1961.mp3'),
        }
    },

    mounted() {
        const railwayLength = this.$refs.railwayRef.clientHeight
        const scaleCount = this.yearDegreeList.length
        const railwayInterval = railwayLength / 52

        this.railwayInterval = railwayInterval

        const screenWidth = document.documentElement.clientWidth

        this.isNotMobile = screenWidth < 450 ? 0 : 1

        // ==========================================
        // instantiate the scrollama
        const scroller = scrollama()

        // setup the instance, pass callback functions
        scroller
            .setup({
                step: '.DegreeRuler__scale_block',
                offset: 0.38,
            })
            .onStepEnter((response) => {
                // { element, index, direction }
                this.scaleIndex = response.index
                response.element.lastChild.style.right = '0px'
            })
            .onStepExit((response) => {
                // { element, index, direction }

                if (response.direction === 'up') {
                    response.element.lastChild.style.right = '-150%'
                }
            })

        // setup resize event
        window.addEventListener('resize', scroller.resize)
    },

    async updated() {
        //   distribute audioSrc to 4 audio players, prevent audio pause issue
        let currentPlayerIndex

        const src = this.yearDegreeList[this.scaleIndex].audio
        switch (this.scaleIndex % 3) {
            case 0:
                this.audioSrc1 = src
                currentPlayerIndex = 1
                break
            case 1:
                this.audioSrc2 = src
                currentPlayerIndex = 2
                break
            case 2:
                this.audioSrc3 = src
                currentPlayerIndex = 3
                break
            case 3:
                this.audioSrc4 = src
                currentPlayerIndex = 4
                break
        }

        const degreeRulerAudio = document.querySelector(
            `.degreeRulerAudio${currentPlayerIndex}`
        )
        // change src from DOM need to reload
        await degreeRulerAudio.load()
        degreeRulerAudio.volume = 0.2
        degreeRulerAudio.play()
    },
}
</script>

<style lang="scss" scoped>
.DegreeRuler {
    &__navbar {
        height: 30px;
        width: 100%;
        position: absolute;
        background: white;
        top: 0;
        right: 0;
        z-index: 888;
        box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.1);
    }

    &__railway {
        position: absolute;
        top: 0;
        right: 0;
        // width: 52px;
        height: 100%;
        overflow: hidden;
        // margin-right: -100px;

        // background: greenyellow;
        // background: chocolate;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        // display: none;
    }

    .mobile_bar {
        position: absolute;
        width: 136px;
        height: 0px;
        left: 0px;
        top: 30px;

        /* Gray */
        background: #4d4d4d;
        /* Gray_Line */
        border: 1px solid #b3b3b3;
    }

    &__scale_block {
        // display: none;
        // background: gold;
    }

    @include atSmall {
        &__navbar {
            display: none !important;
        }

        &__railway {
            width: 60px;
            height: 100%;
            margin-left: -60px;
        }

        box-shadow: none;

        .mobile_bar {
            display: none;
        }

        &__scale_block {
            position: relative;
            height: 52px;
            width: 52px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            .normal_bar {
                height: 1px;
                width: 8px;
                background: #b3b3b3;
                opacity: 0.5;
            }

            .DegreeBlock {
                right: -150%;
                transition: right 0.4s ease-in-out;
            }
            // background: gold;
        }
    }
}
</style>
