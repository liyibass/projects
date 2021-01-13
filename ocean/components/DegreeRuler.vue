<template>
    <div class="DegreeRuler">
        <div class="DegreeRuler__railway" ref="railwayRef">
            <DegreeBlock
                :year="degreeList[audioIndex].year"
                :degree="degreeList[audioIndex].degree"
                :style="{ top: `${audioIndex * railwayInterval}px` }"
            />
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
        }
    },

    mounted() {
        const railwayLength = this.$refs.railwayRef.clientHeight
        const railwayInterval = railwayLength / this.degreeList.length

        this.railwayInterval = railwayInterval
    },
}
</script>

<style lang="scss" scoped>
.DegreeRuler {
    height: 100vh;
    width: 52px;

    // background: gold;
    position: absolute;
    top: 0;
    right: 0;

    padding: 120px 0;
    z-index: 999;

    &__railway {
        position: relative;
        box-sizing: content-box;
        height: 100%;
        // background: chocolate;
    }
}
</style>
