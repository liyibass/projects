<template>
    <div class="Thumbnail" :class="`Thumbnail__${focusState}`">
        <div class="Thumbnail__image">
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

        <div class="Thumbnail__pin" />
    </div>
</template>

<script>
export default {
    props: ['pin', 'focusState'],
}
</script>

<style lang="scss" scoped>
.Thumbnail {
    z-index: 0;
    position: relative;
    // focus zoom transition
    transition: all 0.5s ease-in-out;
    &__image {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%) scale(1);
        // margin-right: 12px;

        border: 2px solid rgba(255, 255, 255, 0.25);
        overflow: hidden;
        img {
            width: 100%;
        }

        // image transition
        opacity: 1;

        transition: all 0.9s ease-in-out;
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

        border-top: 200px solid rgba(255, 255, 255, 0.25);

        // movement transition
        transition: all 0.5s ease-in-out;
    }
}

.Thumbnail__small {
    margin: 18px;
    .Thumbnail__image {
        width: 36px;
        height: 36px;
        border-radius: 18px;
    }

    .Thumbnail__pin {
        margin-top: 18px;
        border-top: 60vh solid rgba(255, 255, 255, 0.25);
    }

    @include atSmall {
        margin: 30px;
        .Thumbnail__image {
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }

        .Thumbnail__pin {
            margin-top: 30px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }

    @include atMedium {
        margin: 20px;
        .Thumbnail__image {
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }

        .Thumbnail__pin {
            margin-top: 20px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }
}

.Thumbnail__large {
    margin: 32px;
    .Thumbnail__image {
        width: 64px;
        height: 64px;
        border-radius: 32px;
    }

    .Thumbnail__pin {
        margin-top: 32px;
        border-top: 60vh solid rgba(255, 255, 255, 0.25);
    }

    @include atSmall {
        margin: 45px;
        .Thumbnail__image {
            width: 90px;
            height: 90px;
            border-radius: 45px;
        }

        .Thumbnail__pin {
            margin-top: 45px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }

    @include atMedium {
        margin: 40px;
        .Thumbnail__image {
            width: 80px;
            height: 80px;
            border-radius: 40px;
        }

        .Thumbnail__pin {
            margin-top: 40px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }
}

.Thumbnail__mid {
    margin: 24px;
    .Thumbnail__image {
        width: 48px;
        height: 48px;
        border-radius: 24px;
    }

    .Thumbnail__pin {
        margin-top: 24px;
        border-top: 60vh solid rgba(255, 255, 255, 0.25);
    }

    @include atSmall {
        margin: 30px;
        .Thumbnail__image {
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }

        .Thumbnail__pin {
            margin-top: 30px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }

    @include atMedium {
        margin: 30px;
        .Thumbnail__image {
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }

        .Thumbnail__pin {
            margin-top: 30px;
            border-top: 60vh solid rgba(255, 255, 255, 0.25);
        }
    }
}

.Thumbnail__focus {
    // margin-right: 80px !important;
    display: none;
    .Thumbnail__image {
        // width: 80px !important;
        // height: 80px !important;
        // border-radius: 40px !important;
    }
    .Thumbnail__pin {
        display: none;
    }

    @include atSmall {
        display: block;

        margin-right: 72px !important;

        .Thumbnail__image {
            width: 144px !important;
            height: 144px !important;
            border-radius: 72px !important;
        }
        .Thumbnail__pin {
            display: block;
        }
    }

    @include atMedium {
        margin-right: 80px !important;

        .Thumbnail__image {
            width: 160px !important;
            height: 160px !important;
            border-radius: 80px !important;
        }
    }
}

.Thumbnail__unFocus {
    opacity: 0.1 !important;
}
</style>
