<template>
    <h2 class="ArticleSubTitle">{{ title }}</h2>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style lang="scss" scoped>
.ArticleSubTitle {
    font-family: PingFang TC;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 140%;
    /* identical to box height, or 31px */

    color: #1a1a1a;

    padding-left: 1rem;
    border-left: 1px solid #b3b3b3;
    margin: 8px 20px;
}
</style>
