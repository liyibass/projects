<template>
    <div class="Pin" :class="pin.size">
        <div class="Pin__image">
            <picture>
                <source
                    media="(min-width:760px)"
                    :srcset="require(`@/static/images/${pin.image}@1x.png`)"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    :srcset="require(`@/static/images/pad/${pin.image}@1x.png`)"
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
        <div class="Pin__text">
            <div class="Pin__text_name">
                {{ pin.name }}
            </div>
            <div class="Pin__text_englishName">
                {{ pin.englishName }}
            </div>

            <div class="Pin__text_detail" v-if="isExpanded">
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

    &__image {
        // margin-right: 12px;
        img {
            width: 100%;
        }
    }

    &__text {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
}

.Pin__small {
    top: 10.606%;
    left: 6.25%;
    .Pin__image {
        width: 36px;
        img {
            border-radius: 18px;
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
}

.Pin__large {
    top: 26.325%;
    left: 40%;
    .Pin__image {
        width: 64px;
        img {
            border-radius: 32px;
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
}

.Pin__mid {
    top: 15.909%;
    left: 76.875%;
    .Pin__image {
        width: 48px;
        img {
            border-radius: 24px;
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
}
</style>
