<template>
    <div class="DegreeBlock" :class="{isFocused:isFocused}">
        <span>{{ year }}</span>
        <transition name="fade">
            <span class="title" v-if="showText && isFocused ">海洋平均溫度</span>
        </transition>
        <div class="normal_bar" />
        <span>{{ degree }}&#8451</span>
    </div>
</template>

<script>
export default {
    props: ['year', 'degree', 'isFocused','showText','enableZoomAnimate'],

    mounted() {
       if(this.enableZoomAnimate){
            this.$el.addEventListener('transitionend', (e) => {
            e.target.classList.add('zoom')
            setTimeout(() => {
                e.target.classList.remove('zoom')
            }, 500)
        })
       }
    },
}
</script>

<style lang="scss" scoped>


.DegreeBlock {
    position: absolute;
    right: -150%;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;

    width: 100%;
    height: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;

    .title {
        display: block;
        position: absolute;
        
        right: 50%;
        transform: translate(50%, 0%);
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: right;

        /* Gray */
        color: #4d4d4d;
    }

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


    @include atSmall {
        width: 52px;
        height: 52px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0;

        .title {
            transform: translate(0%, 0%);

            opacity: 0.5;
            position: absolute;
            width: 80px;
            top: -8.5px;
            right: 0%;
        }

        .normal_bar {
            display: block;
        }
    }
    @include atMediumSmall {
        .title {
            opacity: 0.5;
            top: 8.5px;
            right: 100%;
        }
    }
}

.isFocused{
    right: 0;
    opacity: 1;

}
.zoom {
    animation-name: zoomInOut;
    animation-duration: 0.5s;
}

@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}
</style>
