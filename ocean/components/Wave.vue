<template>
    <div class="Wave">
        <!-- <div class="Wave__cursor" :class="{ Wave__cursor_play: play }" /> -->
        <div class="Wave__before">
            <img :src="waveImg" alt="" />
        </div>
        <div class="Wave__after" :style="{ animationDuration: `${duration}s` }">
            <img :src="waveImg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['waveImg', 'play', 'duration'],
}
</script>

<style lang="scss" scoped>
.Wave {
    position: relative;
    // display: flex;
    // align-items: center;

    width: 88px;
    img {
        display: block;
        width: 88px;
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
        // animation: cursorPlay;
        // animation-delay: 1s;
        // animation-duration: 4s;
        // animation-iteration-count: infinite;
        // animation-timing-function: linear;
    }

    &__before {
        display: block;
        filter: grayscale(100%);
        position: relative;
        top: 0;
        left: 0;
        width: 88px;
    }

    &__after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        overflow: hidden;

        animation: play;
        animation-duration: 11s;
        animation-iteration-count: infinite;
    }

    @include atSmall {
        width: 120px;
        img {
            width: 120px;
        }
    }

    @include atMedium {
        width: 80px;
        img {
            width: 80px;
        }
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
        top: 0;
        left: 0;
        width: 0px;
    }
    50% {
        top: 0;
        left: 0;
        width: 50%;
    }
    100% {
        top: 0;
        left: 0;
        width: 100%;
    }
}

// @keyframes cursorPlay {
//     0% {
//         left: 0;
//     }
//     100% {
//         left: 100%;
//     }
// }
</style>
