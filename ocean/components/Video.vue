<template>
    <div class="Video" ref="videoRef">
        <!-- <video class="Video__video" playsinline> -->
        <!-- <source v-if="isMobile" src="~/static/videos/people_mobile.mp4" />
            <source v-else src="~/static/videos/people.mp4" /> -->
        <!-- </video> -->
        <h1>Video</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: true,
        }
    },
    mounted() {
        if (this.$refs.videoRef.clientWidth > 480) {
            this.isMobile = false
        } else {
            this.isMobile = true
        }
    },

    methods: {
        // toggleVolume() {
        //     if (this.isMuted === true) {
        //         this.gaClickHandler('sound')
        //     }
        //     this.isMuted = !this.isMuted
        // },
    },
}
</script>

<style lang="scss" scoped>
.Video {
    position: relative;
    height: 100vh;
    width: 100%;
    background: darkslategrey;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
