<template>
    <div class="ArticleCarousel">
        <vueper-slides
            ref="myVueperSlides"
            autoplay
            :pauseOnHover="true"
            :dragging-distance="70"
            prevent-y-scroll
            :arrows="false"
            :slideRatio="1 / 2"
            lazy
            lazy-load-on-drag
        >
            <vueper-slide
                v-for="image in images"
                :key="image.id"
                :image="image.imageUrl"
                :content="image.comment"
            />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props: ['images'],
    components: { VueperSlides, VueperSlide },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.ArticleCarousel {
    position: relative;
    margin-bottom: 56px;

    .vueperslides__bullet .default {
        width: 20px;
        height: 1px;
        background: #fdffff;
        opacity: 0.9;
        transition: 0.3s;
        border: none;
        box-shadow: none;
    }

    .vueperslides__bullet--active .default {
        height: 2px;
    }
}
</style>
