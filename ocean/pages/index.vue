<template>
    <div>
        <transition name="fade">
            <div class="loadingMask" v-if="isLoading">
                <img src="~/static/images/loading.gif" alt="" />
            </div>
        </transition>
        <!-- <ScrollHero /> -->
        <VolumeHint />
        <Beach />
        <Stage />
        <!-- <Story /> -->
        <Diving />
        <!-- <DivingDark /> -->
        <!-- <Video /> -->
        <!-- <Final /> -->
        <!-- <div class="YOYO">
            <button v-scroll-to="'#scene1'">
                Scroll to #element1
            </button>
        </div>

        <Fullpage />
        <div class="YOYO">Fuck</div> -->
    </div>
</template>

<script>
import ScrollHero from '~/components/ScrollHero'
import VolumeHint from '~/components/VolumeHint'
import Beach from '~/components/Beach'
import Stage from '~/components/Stage'
import Story from '~/components/Story'
import Diving from '~/components/Diving'
import DivingDark from '~/components/DivingDark'
import Video from '~/components/Video'
import Final from '~/components/Final'
import Fullpage from '~/components/Fullpage/Fullpage'
export default {
    components: {
        ScrollHero,
        VolumeHint,
        Beach,
        Stage,
        Story,
        Diving,
        DivingDark,
        Video,
        Final,
        Fullpage,
    },
    data() {
        return {
            isLoading: true,
        }
    },
    // mounted() {
    //     this.$nextTick(() => {
    //         console.log('ready load')
    //         // this.isLoading = false
    //     })
    // },
    created() {
        // would work in 'ready', 'attached', etc.
        window.addEventListener('load', () => {
            console.log('ready load')
            this.isLoading = false
        })
    },
}
</script>

<style lang="scss" scoped>
.loadingMask {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.9;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 50px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.YOYO {
    height: 200vh;
    background: gold;
}
</style>
