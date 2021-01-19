<template>
    <div class="Pin">
        <div class="Pin__image">
            <!-- {{ getImgUrl(pin.image) }} -->
            <!-- <img :src="getImgUrl(pin.image)" alt="" /> -->
            <!-- <picture>
                <source
                    media="(min-width:760px)"
                    :srcset="
                        `
                        ../static/images/${pin.image}@1x.png 1x,
                        ../static/images/${pin.image}@2x.png 2x,
                        ../static/images/${pin.image}@3x.png 3x,
                    `
                    "
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    :srcset="
                        `
                        ../static/images/pad/${pin.image}@1x.png 1x,
                        ../static/images/pad/${pin.image}@2x.png 2x,
                        ../static/images/pad/${pin.image}@3x.png 3x,
                    `
                    "
                    alt="ocean"
                />

                <img
                    :srcset="
                        `
                        ../static/images/mobile/${pin.image}@1x.png 1x,
                        ../static/images/mobile/${pin.image}@2x.png 2x,
                    `
                    "
                    alt="ocean"
                />
            </picture> -->
        </div>
        <div class="Pin__text">
            <div class="Pin__text_name">
                {{ pin.name }}
            </div>
            <div class="Pin__text_englishName">
                {{ pin.englishName }}
            </div>

            <div class="Pin__text_detail" v-if="isExpanded">
                {{ pin.detail }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pin'],

    data() {
        return {
            isExpanded: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.Pin {
    position: absolute;
    top: 0;
    left: 0;

    &__image {
        img {
            width: 100%;
        }
    }
}
</style>
