<template>
    <div class="ThumbnailTiny">
        <div class="ThumbnailTiny__image">
            <picture>
                <source
                    media="(min-width:760px)"
                    :srcset="require(`@/static/images/${pin.image}@1x.png`)"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    :srcset="require(`@/static/images/pad/${pin.image}@1x.png`)"
                    alt="ocean"
                />

                <img
                    :srcset="
                        require(`@/static/images/mobile/${pin.image}@1x.png`)
                    "
                    alt="ocean"
                />
            </picture>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pin', 'focusState'],
}
</script>

<style lang="scss" scoped>
.ThumbnailTiny {
    z-index: 0;
    position: relative;
    // focus zoom transition
    transition: all 0.5s ease-in-out;

    margin-right: 20px;
    &__image {
        position: relative;
        z-index: 1;
        width: 80px;
        height: 80px;
        // margin-right: 12px;
        border-radius: 40px;

        border: 2px solid rgba(255, 255, 255, 0.25);
        overflow: hidden;
        img {
            width: 100%;
        }

        // image transition
        transition: all 0.5s ease-in-out;
    }

    @include atSmall {
        display: none;
    }
}
</style>
