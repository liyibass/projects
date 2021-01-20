<template>
    <div class="Pin Pin__readyToGrow" :class="pin.size">
        <div class="Pin__thumbnail">
            <div class="Pin__thumbnail_image">
                <picture>
                    <source
                        media="(min-width:760px)"
                        :srcset="require(`@/static/images/${pin.image}@1x.png`)"
                        alt="ocean"
                    />
                    <source
                        media="(min-width:480px)"
                        :srcset="
                            require(`@/static/images/pad/${pin.image}@1x.png`)
                        "
                        alt="ocean"
                    />

                    <img
                        :srcset="
                            require(`@/static/images/mobile/${pin.image}@1x.png`)
                        "
                        alt="ocean"
                    />
                </picture>
            </div>

            <div class="Pin__thumbnail_pin" />
        </div>

        <div class="Pin__text">
            <div class="Pin__text_name">
                {{ pin.name }}
            </div>
            <div class="Pin__text_englishName">
                {{ pin.englishName }}
            </div>

            <div class="Pin__text_detail">
                {{ pin.detail }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pin'],

    data() {
        return {
            isExpanded: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.Pin {
    position: absolute;
    top: 30px;
    left: 0;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    // movement transition
    transition: all 0.5s ease-in-out;

    &__thumbnail {
        position: relative;
        // focus zoom transition
        transition: all 0.5s ease-in-out;
        &_image {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            // margin-right: 12px;

            border: 2px solid rgba(255, 255, 255, 0.25);
            overflow: hidden;
            img {
                width: 100%;
            }

            // image transition
            transition: all 0.5s ease-in-out;
        }

        &_pin {
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

            border-top: 200px solid rgba(255, 255, 255, 0.25);

            // movement transition
            transition: all 0.5s ease-in-out;
        }
    }

    &__text {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        // text opacity transition
        transition: all 1s ease-in-out;

        &_name {
            font-weight: normal;
            line-height: 100%;

            color: #fdffff;

            margin-bottom: 4px;
        }
        &_englishName {
            font-weight: 300;
            /* identical to box height */
            text-align: center;

            /* White */
            color: #fdffff;
            opacity: 0.7;

            margin-bottom: 8px;
        }

        &_detail {
            opacity: 0;

            position: absolute;
            top: 100%;
            font-size: 16px;
            line-height: 180%;
            /* or 29px */
            text-align: justify;

            /* White */
            color: #fdffff;

            border-left: 1px solid rgba(253, 255, 255, 0.5);
            padding-left: 16px;
            margin: 0 20px;
        }
    }

    @include atSmall {
        flex-direction: row;

        &__text {
            width: calc(40vw);
            max-width: 437px;
            margin-left: 12px;
            align-items: flex-start;

            &_englishName {
                margin-bottom: 0;
            }

            &_detail {
                margin: 0;
                margin-top: 12px;
            }
        }
    }

    @include atMedium {
        &__text {
            width: 348px;
        }
    }
}

.Pin__readyToGrow {
    transform: translateY(400%);

    .Pin__thumbnail {
        &_image {
            transform: scale(0);
        }

        &_pin {
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
        }
    }
    .Pin__text {
        opacity: 0;
    }
}

.Pin__focus {
    .Pin__thumbnail {
        margin-right: 80px !important;
        &_image {
            width: 80px !important;
            height: 80px !important;
            border-radius: 40px !important;
        }
    }

    .Pin__text {
        &_detail {
            opacity: 1;
            // text opacity transition
            transition: all 0.8s ease-in-out;
            transition-delay: 1s;
        }
    }

    @include atSmall {
        .Pin__thumbnail {
            margin-right: 72px !important;

            &_image {
                width: 144px !important;
                height: 144px !important;
                border-radius: 72px !important;
            }
        }

        .Pin__text {
            margin-top: -108px !important;

            &_detail {
                // display: block;
            }
        }
    }

    @include atMedium {
        .Pin__thumbnail {
            margin-right: 80px !important;

            &_image {
                width: 160px !important;
                height: 160px !important;
                border-radius: 80px !important;
            }
        }

        .Pin__text {
            margin-top: -110px !important;

            &_detail {
                // display: block;
            }
        }
    }

    // switch thumbnail and text's position
    &:last-child {
        @include atSmall {
            .Pin__text {
                position: absolute;
                right: calc(100% + 30px + 40px);
            }
        }

        @include atMedium {
            .Pin__text {
                position: absolute;
                right: calc(100% + 30px + 60px);
            }
        }
    }
}

.Pin__unFocus {
    opacity: 0.1;
}

.Pin__small {
    top: 10.606%;
    left: 3.25%;
    .Pin__thumbnail {
        margin: 18px;
        &_image {
            width: 36px;
            height: 36px;
            border-radius: 18px;
        }

        &_pin {
            margin-top: 18px;
            border-top: 224px solid rgba(255, 255, 255, 0.25);
        }
    }

    .Pin__text {
        &_name {
            font-size: 16px;
        }
        &_englishName {
            font-size: 12px;
            line-height: 17px;
        }
    }

    @include atSmall {
        top: 9.375%;
        left: 13.542%;
        .Pin__thumbnail {
            margin: 30px;
            &_image {
                width: 60px;
                height: 60px;
                border-radius: 30px;
            }

            &_pin {
                margin-top: 30px;
                border-top: 500px solid rgba(255, 255, 255, 0.25);
            }
        }
    }

    @include atMedium {
        top: 19.383%;
        left: 12.431%;
        .Pin__thumbnail {
            margin: 20px;
            &_image {
                width: 40px;
                height: 40px;
                border-radius: 20px;
            }

            &_pin {
                margin-top: 20px;
                border-top: 231px solid rgba(255, 255, 255, 0.25);
            }
        }
    }
}

.Pin__large {
    top: 26.325%;
    left: 40%;
    .Pin__thumbnail {
        margin: 32px;
        &_image {
            width: 64px;
            height: 64px;
            border-radius: 32px;
        }

        &_pin {
            margin-top: 32px;
            border-top: 72px solid rgba(255, 255, 255, 0.25);
        }
    }

    .Pin__text {
        &_name {
            font-size: 22px;
        }
        &_englishName {
            font-size: 16px;
            line-height: 22px;
        }
    }

    @include atSmall {
        top: 28.125%;
        left: 26.042%;
        .Pin__thumbnail {
            margin: 45px;
            &_image {
                width: 90px;
                height: 90px;
                border-radius: 45px;
            }

            &_pin {
                margin-top: 45px;
                border-top: 360px solid rgba(255, 255, 255, 0.25);
            }
        }
    }

    @include atMedium {
        top: 29.26%;
        left: 34.722%;
        .Pin__thumbnail {
            margin: 40px;
            &_image {
                width: 80px;
                height: 80px;
                border-radius: 40px;
            }

            &_pin {
                margin-top: 40px;
                border-top: 238px solid rgba(255, 255, 255, 0.25);
            }
        }
    }
}

.Pin__mid {
    top: 15.909%;
    left: 76.875%;
    .Pin__thumbnail {
        margin: 24px;
        &_image {
            width: 48px;
            height: 48px;
            border-radius: 24px;
        }

        &_pin {
            margin-top: 24px;
            border-top: 252px solid rgba(255, 255, 255, 0.25);
        }
    }

    .Pin__text {
        &_name {
            font-size: 18px;
        }
        &_englishName {
            font-size: 14px;
            line-height: 20px;
        }
    }

    @include atSmall {
        top: 19.531%;
        left: 60.417%;
        .Pin__thumbnail {
            margin: 30px;
            &_image {
                width: 60px;
                height: 60px;
                border-radius: 30px;
            }

            &_pin {
                margin-top: 30px;
                border-top: 480px solid rgba(255, 255, 255, 0.25);
            }
        }
    }

    @include atMedium {
        top: 17.284%;
        left: 74.583%;
        .Pin__thumbnail {
            margin: 30px;
            &_image {
                width: 60px;
                height: 60px;
                border-radius: 30px;
            }

            &_pin {
                margin-top: 30px;
                border-top: 390px solid rgba(255, 255, 255, 0.25);
            }
        }
    }
}
</style>
