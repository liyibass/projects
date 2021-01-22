<template>
    <div class="AnimateThumbnail">
        <div class="AnimateThumbnail__ball"></div>
        <div class="AnimateThumbnail__inner_ball"></div>
        <div class="AnimateThumbnail__pin"></div>
    </div>
</template>

<script>
export default {
    props: ['pin'],
}
</script>

<style lang="scss" scoped>
.AnimateThumbnail {
    position: relative;
    &__ball {
        background: rgba(255, 255, 255, 0.3);
        z-index: 1;
    }
    &__inner_ball {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        z-index: 1;
    }

    &__pin {
        position: absolute;
        z-index: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        // left: 5px;
        height: 200px;

        width: 0;
        height: 0;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;

        border-top: 333px solid rgba(255, 255, 255, 0.25);

        // movement transition
        transition: all 0.5s ease-in-out;
    }
}

.animate_start {
    .AnimateThumbnail__ball {
        animation: beat;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-delay: 0.2s;
    }
    .AnimateThumbnail__inner_ball {
        animation: beat;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
}

@keyframes beat {
    0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1.2);
    }
    40% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}

.pin_1 {
    .AnimateThumbnail__ball {
        width: $pin_1_size;
        height: $pin_1_size;
        border-radius: $pin_1_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_1_size/4;
        left: $pin_1_size/4;

        width: $pin_1_size/2;
        height: $pin_1_size/2;
        border-radius: $pin_1_size/4;
    }
}

.pin_2 {
    .AnimateThumbnail__ball {
        width: $pin_3_size;
        height: $pin_3_size;
        border-radius: $pin_3_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_3_size/4;
        left: $pin_3_size/4;

        width: $pin_3_size/2;
        height: $pin_3_size/2;
        border-radius: $pin_3_size/4;
    }
}

.pin_3 {
    .AnimateThumbnail__ball {
        width: $pin_2_size;
        height: $pin_2_size;
        border-radius: $pin_2_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_2_size/4;
        left: $pin_2_size/4;

        width: $pin_2_size/2;
        height: $pin_2_size/2;
        border-radius: $pin_2_size/4;
    }
}

.pin_4 {
    .AnimateThumbnail__ball {
        width: $pin_4_size;
        height: $pin_4_size;
        border-radius: $pin_4_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_4_size/4;
        left: $pin_4_size/4;

        width: $pin_4_size/2;
        height: $pin_4_size/2;
        border-radius: $pin_4_size/4;
    }
}

.pin_5 {
    .AnimateThumbnail__ball {
        width: $pin_5_size;
        height: $pin_5_size;
        border-radius: $pin_5_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_5_size/4;
        left: $pin_5_size/4;

        width: $pin_5_size/2;
        height: $pin_5_size/2;
        border-radius: $pin_5_size/4;
    }
}

.pin_6 {
    .AnimateThumbnail__ball {
        width: $pin_6_size;
        height: $pin_6_size;
        border-radius: $pin_6_size/2;
    }
    .AnimateThumbnail__inner_ball {
        top: $pin_6_size/4;
        left: $pin_6_size/4;

        width: $pin_6_size/2;
        height: $pin_6_size/2;
        border-radius: $pin_6_size/4;
    }
}
</style>
