<template>
    <div class="PinTiny PinTiny__readyToGrow" :class="`pin_${pin.id}`">
        <div v-if="pin.name" class="PinTiny__header">
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
    transition: all 1s ease;

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
    top: 42.235%;
    left: 5%;
    @include atMedium {
        top: 34.444%;
        left: 12.5%;
    }
}

.pin_1 {
    top: 39.583%;
    left: 75.313%;
    @include atMedium {
        top: 44.074%;
        left: 36.319%;
    }
}
.pin_2 {
    top: 15.909%;
    left: 20%;
    @include atMedium {
        top: 12.716%;
        left: 21.458%;
    }
}
.pin_3 {
    top: 55.303%;
    left: 32.5%;
    @include atMedium {
        top: 21.065%;
        left: 51.042%;
    }
}
.pin_4 {
    top: 24.242%;
    left: 49.063%;
    @include atMedium {
        top: 53.951%;
        left: 58.611%;
    }
}
.pin_5 {
    top: 67.803%;
    left: 66.25%;
    @include atMedium {
        top: 32.099%;
        left: 73.194%;
    }
}

.pin_6 {
    display: none;
    @include atMedium {
        display: block;
        top: 30.617%;
        left: 29.514%;
    }
}
.pin_7 {
    display: none;
    @include atMedium {
        display: block;
        top: 59.259%;
        left: 81.042%;
    }
}
.pin_8 {
    display: none;
    @include atMedium {
        display: block;
        top: 46.296%;
        left: 88.472%;
    }
}
</style>
