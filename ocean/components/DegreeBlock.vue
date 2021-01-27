<template>
    <div class="DegreeBlock">
        <span>{{ year }}</span>
        <div class="normal_bar" />
        <span>{{ degree }}&#8451</span>
    </div>
</template>

<script>
export default {
    props: ['year', 'degree'],

    mounted() {
        this.$el.addEventListener('transitionend', (e) => {
            e.target.classList.add('zoom')
            setTimeout(() => {
                e.target.classList.remove('zoom')
            }, 500)
        })
    },
}
</script>

<style lang="scss" scoped>
.DegreeBlock {
    position: absolute;
    width: 100%;
    height: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;

    .normal_bar {
        display: none;
        height: 1px;
        width: 52px;
        background: #b3b3b3;
    }

    span {
        font-size: 12px;
        line-height: 17px;
    }

    transition: top 0.5s ease-in-out;

    @include atSmall {
        width: 52px;
        height: 52px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0;

        .normal_bar {
            display: block;
        }
    }
}

.zoom{
    animation-name: zoomInOut;
    animation-duration: 0.5s;
}

@keyframes zoomInOut{
    0%{
        transform: scale(1);
    }

    20%{
        transform: scale(1.3);

    }

    100%{
        transform: scale(1);

    }
}


</style>
