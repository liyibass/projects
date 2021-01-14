<template>
    <div class="ArticleImage">
        <div class="ArticleImage__image">
            <img v-lazy="imageUrl" :alt="comment" />
        </div>

        <div class="ArticleImage__comment">
            {{ comment }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'comment'],
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
        opacity: 0.66;

        margin: 12px 20px 24px;
    }

    @include atSmall {
        max-width: 550px;
        margin: 0 40px;
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
