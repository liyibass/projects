<template>
    <div class="ArticleImage">
        <div class="ArticleImage__image">
            <img :src="imageUrl" :alt="comment" />
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
}
</style>
