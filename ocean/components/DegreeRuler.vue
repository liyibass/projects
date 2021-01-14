<template>
    <div class="DegreeRuler">
        <div class="DegreeRuler__railway" ref="railwayRef">
            <DegreeBlock
                :year="degreeList[audioIndex].year"
                :degree="degreeList[audioIndex].degree"
                :style="{
                    top: `${(railwayInterval + 52) *
                        audioIndex *
                        isNotMobile}px`,
                }"
            />

            <div
                class="DegreeRuler__scale_block"
                v-for="(degreeBlock, index) in degreeList"
                :key="index"
            >
                <div class="normal_bar" />
            </div>

            <div class="mobile_bar" />
        </div>
    </div>
</template>

<script>
import DegreeBlock from '~/components/DegreeBlock'

export default {
    props: ['audioIndex'],

    components: {
        DegreeBlock,
    },

    data() {
        return {
            degreeList: [
                {
                    year: '1958',
                    degree: '26',
                },
                {
                    year: '1990',
                    degree: '27',
                },
                {
                    year: '2020',
                    degree: '29',
                },
                {
                    year: '2050',
                    degree: '31',
                },
                {
                    year: '2077',
                    degree: '77',
                },
            ],
            railwayInterval: 100,
            isNotMobile: 1,
        }
    },

    mounted() {
        const railwayLength = this.$refs.railwayRef.clientHeight
        const railwayInterval =
            (railwayLength - 5 * 52) / (this.degreeList.length - 1)

        this.railwayInterval = railwayInterval

        const screenWidth = document.documentElement.clientWidth

        this.isNotMobile = screenWidth < 450 ? 0 : 1
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

    @include atSmall {
        background: none;

        height: 100vh;
        width: 52px;

        padding: 120px 0;

        box-shadow: none;

        .mobile_bar {
            display: none;
        }
    }
}
</style>
