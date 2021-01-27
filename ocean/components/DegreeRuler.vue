<template>
    <div class="DegreeRuler">
        <!-- <div class="observer">{{ scaleIndex }}</div> -->

        <div class="DegreeRuler__railway" ref="railwayRef">
            <DegreeBlock
                :year="yearDegreeList[scaleIndex].year"
                :degree="yearDegreeList[scaleIndex].degree"
                :style="{
                    top: `${(railwayInterval + 52) *
                        scaleIndex *
                        isNotMobile}px`,
                }"
            />

            <div
                class="DegreeRuler__scale_block"
                v-for="(degreeBlock, index) in yearDegreeList"
                :key="index"
            >
                <div class="normal_bar" />
            </div>

            <div class="mobile_bar" />
        </div>

        <audio class="audio degreeRulerAudio1" />
        <audio class="audio degreeRulerAudio2" />
        <audio class="audio degreeRulerAudio3" />
        <audio class="audio degreeRulerAudio4" />
    </div>
</template>

<script>
import DegreeBlock from '~/components/DegreeBlock'
import yearDegreeMixin from '~/mixins/yearDegreeMixin'

export default {
    props: ['scaleIndex'],
    mixins: [yearDegreeMixin],

    components: {
        DegreeBlock,
    },

    data() {
        return {
            railwayInterval: 100,
            isNotMobile: 1,
        }
    },

    mounted() {
        const railwayLength = this.$refs.railwayRef.clientHeight
        const scaleCount = this.yearDegreeList.length
        const railwayInterval =
            (railwayLength - scaleCount * 52) / (scaleCount - 1)

        this.railwayInterval = railwayInterval

        const screenWidth = document.documentElement.clientWidth

        this.isNotMobile = screenWidth < 450 ? 0 : 1
    },

    async updated() {
        //   distribute audioSrc to 4 audio players, prevent audio pause issue
        let currentPlayerIndex

        switch (this.scaleIndex % 3) {
            case 0:
                currentPlayerIndex = 1
                break
            case 1:
                currentPlayerIndex = 2
                break
            case 2:
                currentPlayerIndex = 3
                break
            case 3:
                currentPlayerIndex = 4
                break
        }

        const src = this.yearDegreeList[this.scaleIndex].audio
        const degreeRulerAudio = document.querySelector(
            `.degreeRulerAudio${currentPlayerIndex}`
        )
        degreeRulerAudio.src = src

        // change src from DOM need to reload
        await degreeRulerAudio.load()
        degreeRulerAudio.volume = 0.2
        degreeRulerAudio.play()
    },
}
</script>

<style lang="scss" scoped>
.DegreeRuler {
    height: 30px;
    width: 100%;

    background: white;
    position: absolute;
    top: 0;
    right: 0;

    padding: 0;
    z-index: 888;

    box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.1);
    &__railway {
        position: relative;
        box-sizing: content-box;
        height: 100%;
        // background: chocolate;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        display: none;
        // background: gold;
    }

    @include atSmall {
        background: none;

        height: 100vh;
        width: 52px;

        padding: 120px 0;

        box-shadow: none;

        .mobile_bar {
            display: none;
        }

        &__scale_block {
            height: 52px;
            width: 52px;

            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            padding-right: 8px;
            .normal_bar {
                height: 1px;
                width: 8px;
                background: #b3b3b3;
                opacity: 0.5;
            }
            // background: gold;
        }
    }
}
</style>
