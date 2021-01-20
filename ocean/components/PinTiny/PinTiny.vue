<template>
    <div class="PinTiny PinTiny__readyToGrow" :class="`pin_${pin.id}`">
        <div class="PinTiny__wave"></div>
        <div class="PinTiny__name">{{ pin.name }}</div>
        <AnimateThumbnail :pin="pin" />
    </div>
</template>

<script>
import AnimateThumbnail from './AnimateThumbnail'
// import Content from './Content'

export default {
    props: ['pin'],
    components: {
        AnimateThumbnail,
        // Content,
    },

    data() {
        return {}
    },
}
</script>

<style lang="scss">
.PinTiny {
    position: absolute;
    top: 30px;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    // movement transition
    transition: all 1s ease-in-out;

    .PinTiny__name {
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        /* identical to box height, or 16px */
        display: flex;
        align-items: center;

        /* White */
        color: #fdffff;
        margin-bottom: 8px;
    }

    @include atSmall {
        flex-direction: row;
    }

    @include atMedium {
    }
}

.PinTiny__readyToGrow {
    transform: translateY(400%) !important;

    .AnimateThumbnail {
        // transform: scale(0) !important;
        transform: translate(-50%, -50%) scale(0.1);
        opacity: 0;

        &__pin {
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
        }
    }
    .PinTiny__name {
        opacity: 0;
    }
}

.pin_1 {
    top: 46.78%;
    left: 5.5%;
}
.pin_2 {
    top: 19.318%;
    left: 18.625%;
}
.pin_3 {
    top: 46.644%;
    left: 78.313%;
}
.pin_4 {
    top: 61.364%;
    left: 35.5%;
}
.pin_5 {
    top: 28.788%;
    left: 49.563%;
}
.pin_6 {
    top: 71.212%;
    left: 64.875%;
}
</style>
