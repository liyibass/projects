<template>
    <picture class="LongImage">
        <source
            media="(min-width:760px)"
            :srcset="`${images.desktop}`"
            alt="ocean"
        />
        <source
            media="(min-width:480px)"
            :srcset="`${images.pad1X} 1x,${images.pad2X} 2x,`"
            alt="ocean"
        />

        <img
            :srcset="
                `${images.mobile1X} 1x,${images.mobile2X} 2x,${images.mobile3X} 3x`
            "
            alt="ocean"
            :style="{ minHeight: zoom ? `125vh` : `100vh` }"
        />
    </picture>
</template>

<script>
export default {
    props: ['image', 'zoom'],
    data() {
        return {
            images: {
                mobile1X: require(`@/static/images/mobile/${this.image}@1x.png`),
                mobile2X: require(`@/static/images/mobile/${this.image}@2x.png`),
                mobile3X: require(`@/static/images/mobile/${this.image}@3x.png`),
                pad1X: require(`@/static/images/pad/${this.image}@1x.png`),
                pad2X: require(`@/static/images/pad/${this.image}@2x.png`),
                desktop: require(`@/static/images/${this.image}.png`),
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.LongImage {
    img {
        width: 100vw;
        // min-height: 120vh;
        // border-radius: 50%;
        // min-width: 100vw;
        // min-height: 100vh;

        object-fit: cover;
        // object-position: center;
    }
}
</style>
