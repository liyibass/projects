<template>
    <div class="ArticleCarousel">
        <carousel
            :per-page="1"
            centerMode
            loop
            :autoplayTimeout="4000"
            paginationPosition="bottom-overlay"
            paginationActiveColor="rgba(255,255,255,1)"
            paginationColor="rgba(255,255,255,0.6)"
        >
            <slide v-for="(slide, i) in images" :key="i">
                <img :src="slide.imageUrl" alt="" />
                <div class="comment">
                    <span v-if="slide.comment">
                        {{ slide.comment }}
                    </span>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },
    props: ['images'],
    data() {
        return {}
    },
}
</script>

<style lang="scss">
.ArticleCarousel {
    position: relative;
    padding-bottom: 12px !important;

    img {
        width: 100%;
    }

    .comment {
        padding: 12px 20px;
        font-weight: 300;
        font-size: 13px;
        line-height: 150%;
        /* identical to box height, or 19px */
        height: 43px;

        /* Gray */
        color: #4d4d4d;
        opacity: 0.87;

        @include atSmall {
            padding: 12px 40px;
        }
        @include atMedium {
            // width: 53.512%;
            // max-width: none;

            // padding: 0;
            // margin: 0 40px 29px;
            width: 83.056%;
            margin: auto;
        }
    }

    .VueCarousel-dot-container {
        padding-bottom: 60px;

        .VueCarousel-dot {
            margin: 0 6px !important;
            padding: 0% !important;
            width: 20px !important;
            height: 2px !important;
            border-radius: 0;
        }

        @include atSmall {
            .VueCarousel-dot {
                width: 24px !important;
                margin: 0 8px !important;
            }
        }

        @include atMedium {
            .VueCarousel-dot {
                width: 32px !important;
            }
        }
    }
}
</style>
