<template>
    <div class="ArticleImage">
        <div class="ArticleImage__image">
            <!-- <img :src="imageUrl" :alt="comment" /> -->

            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="../../static/images/13.jpg"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        ../../static/images/pad/13@1x.png 1x,
                        ../../static/images/pad/13@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        ../../static/images/mobile/13@1x.png 1x,
                        ../../static/images/mobile/13@2x.png 2x,
                        ../../static/images/mobile/13@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>

        <div class="ArticleImage__comment hide_text">
            {{ comment }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageName', 'comment'],
}
</script>

<style lang="scss" scoped>
.ArticleImage {
    position: relative;
    margin-bottom: 24px;
    margin-top: 32px;
    &__image {
        img {
            width: 100%;
        }
    }

    &__comment {
        opacity: 1;
        color: #fdffff;

        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        text-align: justify;

        position: absolute;
        top: 4.6%;
        left: 6.667%;

        border-left: 1px solid white;
        padding-left: 16px;

        width: 240px;
        transition: opacity 0.5s ease;
    }

    @include atSmall {
        margin-bottom: 40px;

        &__comment {
            top: 7.813%;
            left: 5.495%;

            width: 400px;
        }
    }

    @include atMedium {
        &__comment {
            top: 28.571%;
            left: 9.091%;

            width: 427px;
        }
    }
}
</style>
