<template>
    <div class="ArticleCarousel">
        <carousel
            :per-page="1"
            centerMode
            loop
            autoplayTimeout="4000"
            paginationPosition="bottom-overlay"
            paginationActiveColor="rgba(255,255,255,1)"
            paginationColor="rgba(255,255,255,0.6)"
        >
            <slide v-for="(slide, i) in images" :key="i">
                <img :src="slide.imageUrl" alt="" />
                <div class="comment" v-if="slide.comment">
                    {{ slide.comment }}
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
    // margin-bottom: 56px !important;
    padding-bottom: 32px !important;

    img {
        width: 100%;
    }

    .comment {
        padding: 12px 20px;
        font-weight: 300;
        font-size: 13px;
        line-height: 150%;
        /* identical to box height, or 19px */

        /* Gray */
        color: #4d4d4d;
        opacity: 0.5;

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

    .VueCarousel-pagination {
        padding-bottom: 60px;

        .VueCarousel-dot {
            width: 20px;
            height: 1px;
            opacity: 0.9;
            transition: 0.3s;
            border: none;
            box-shadow: none;
            border-radius: 50%;
        }
    }
}
</style>
