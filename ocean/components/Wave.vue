<template>
    <div class="Wave">
        <!-- <div class="Wave__cursor" :class="{ Wave__cursor_play: play }" /> -->
        <div class="Wave__before">
            <img :src="waveImg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['waveImg', 'play'],
}
</script>

<style lang="scss" scoped>
.Wave {
    position: relative;
    display: flex;
    align-items: center;
    width: 88px;
    img {
        display: block;
        width: 100%;
    }

    &__cursor {
        height: 100%;
        width: 2px;
        background: white;
        opacity: 0.3;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__cursor_play {
        animation: cursorPlay;
        animation-delay: 1s;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &__before {
        filter: grayscale(100%);
        animation: play;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    @include atSmall {
        width: 120px;
    }

    @include atMedium {
        width: 80px;
    }
}

.Wave__tiny {
    width: 80px;

    @include atSmall {
        width: 120px;
    }
}

@keyframes play {
    0% {
        filter: grayscale(100%);
        transform: scaleY(1);
    }
    50% {
        filter: grayscale(0%);
        transform: scaleY(1.6);
    }
    100% {
        filter: grayscale(100%);
        transform: scaleY(1);
    }
}

@keyframes cursorPlay {
    0% {
        left: 0;
    }
    100% {
        left: 100%;
    }
}
</style>
