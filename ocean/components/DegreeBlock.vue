<template>
    <div class="DegreeBlock">
        <span>{{ year }}</span>
        <div class="bar" />
        <span>{{ degree }}&#8451</span>
    </div>
</template>

<script>
export default {
    props: ['year', 'degree'],
}
</script>

<style lang="scss" scoped>
.DegreeBlock {
    position: relative;
    width: 52px;
    height: 52px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .bar {
        height: 1px;
        width: 52px;
        background: #b3b3b3;
    }

    span {
        font-size: 12px;
        line-height: 17px;
    }

    transition: top 1s ease-in-out;
}
</style>
