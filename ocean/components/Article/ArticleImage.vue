<template>
    <div class="ArticleImage">
        <div class="ArticleImage__image">
            <!-- <img v-lazy="imageUrl" :alt="comment" /> -->
            <img :src="imageUrl" :alt="comment" />
        </div>

        <div class="ArticleImage__comment" :class="{ hide_text: !isMobile }">
            {{ comment }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'comment'],
    data() {
        return {
            isMobile: false,
        }
    },
    mounted() {
        this.isMobile = this.$el.clientWidth < 540 ? true : false
    },
}
</script>

<style lang="scss" scoped>
.ArticleImage {
    position: relative;
    box-sizing: content-box;
    &__image {
        img {
            width: 100%;
        }
    }

    &__comment {
        font-family: PingFang TC;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 150%;
        /* identical to box height, or 19px */
        text-align: justify;

        /* Gray */
        color: #4d4d4d;
        opacity: 0.87;
        transition: opacity 0.5s ease;

        margin: 12px 20px 24px;
    }

    @include atSmall {
        max-width: 550px;
        margin: 0 40px;

        &__comment {
            margin: 12px 20px 24px 0;
        }
    }

    @include atLarge {
        max-width: none;
        // width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        margin-bottom: 32px;

        &__image {
            width: 66.889%;
            // width: 100%;
            // max-width: 800px;
        }

        &__comment {
            width: 33.111%;
            margin: 12px 16px 0;
        }
    }

    @include atSuperLarge {
        &__image {
            width: 800px;
        }
    }
}
</style>
