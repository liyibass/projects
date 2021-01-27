<template>
    <div class="PinTiny PinTiny__readyToGrow" :class="`pin_${pin.id}`">
        <div class="PinTiny__header">
            <Wave :waveImg="pin.waveImg" class="Wave__tiny" :play="true" />
            <div class="PinTiny__header_name">{{ pin.name }}</div>
        </div>
        <AnimateThumbnail :pin="pin" />
    </div>
</template>

<script>
import AnimateThumbnail from './AnimateThumbnail'
import Wave from '../Wave'

// import Content from './Content'

export default {
    props: ['pin'],
    components: {
        AnimateThumbnail,
        Wave,
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

    &__header {
        position: absolute;

        bottom: calc(100% + 13px);
        // top: calc(- 16px);

        display: flex;
        flex-direction: column;
        align-items: center;
        &_name {
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

        .Wave {
            margin-bottom: 12px;
        }
    }

    @include atSmall {
        &__header {
            .Wave {
                margin: 0 0 8px;
            }
        }
    }

    @include atMedium {
        flex-direction: row-reverse;

        &__header {
            bottom: auto;
            left: calc(100% + 13px);

            flex-direction: column-reverse;
            align-items: flex-start;

            &_name {
                margin: 0;
            }
            .Wave {
                margin: 8px 0 0;
            }
        }
    }
}

.PinTiny__readyToGrow {
    transform: translateY(400%) !important;
    opacity: 0;

    .AnimateThumbnail {
        // transform: scale(0) !important;
        transform: translate(-50%, -50%) scale(0.1);

        &__pin {
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
            opacity: 0;
        }
    }
    .PinTiny__header {
        &_name {
            opacity: 0;
        }
    }
}

.pin_0 {
    top: 46.78%;
    left: 5.5%;
}

.pin_1 {
    top: 46.644%;
    left: 78.313%;
}
.pin_2 {
    top: 19.318%;
    left: 18.625%;
}
.pin_3 {
    top: 61.364%;
    left: 35.5%;
}
.pin_4 {
    top: 28.788%;
    left: 49.563%;
}
.pin_5 {
    top: 71.212%;
    left: 64.875%;
}
</style>
