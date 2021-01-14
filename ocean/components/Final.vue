<template>
    <div class="Final" id="Final">
        <div class="Final__background">
            <picture>
                <source
                    media="(min-width:760px)"
                    srcset="../assets/images/23.jpg"
                    alt="ocean"
                />
                <source
                    media="(min-width:480px)"
                    srcset="
                        ../assets/images/pad/23@1x.png 1x,
                        ../assets/images/pad/23@2x.png 2x
                    "
                    alt="ocean"
                />

                <img
                    srcset="
                        ../assets/images/mobile/23@1x.png 1x,
                        ../assets/images/mobile/23@2x.png 2x,
                        ../assets/images/mobile/23@3x.png 3x
                    "
                    alt="ocean"
                />
            </picture>
        </div>

        <div class="Final__credit">
            <div class="Final__credit_content">
                記者：胡慕情<br />
                攝影：鄒保祥、林煒凱<br />
                網頁製作：呂理詣、吳曼汝、米承鶴、李又如、陳姿廷、簡信昌<br />
                網頁素材（照片、錄音）提供：莫顯蕎、陳正虔、Yannick<br />
                Dauby、蘇淮、呂翊齊、綠色和平<br />

                發布日期：2021-02-06
            </div>
        </div>

        <div class="Final__mask" />
    </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
    data() {
        return {}
    },
    mounted() {
        const FinalMaskDOM = document.querySelector('.Final__mask')

        // Declare Scene
        const backgroundDarkScene = this.$scrollmagic
            .scene({
                // ID of element where animation starts
                triggerElement: '.Final',
                // Where to start trigger from element top
                offset: 0,
                // {0,0.5,1} - animations starts from {top,center,end} of window
                triggerHook: 0,
                // Duration of animation
                duration: 100,
            })
            .on('progress', (e) => {
                // this.maskOpacity = e.progress
                FinalMaskDOM.style.opacity = -e.progress + 1
            })
        // .addIndicators({ name: 'backgroundDarkScene' })

        this.$scrollmagic.addScene(backgroundDarkScene)
    },
}
</script>

<style lang="scss" scoped>
.Final {
    z-index: 109;
    position: relative;
    background: black;

    &__background {
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    &__mask {
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        background: black;
        opacity: 1;
    }

    &__credit {
        position: absolute;
        bottom: 0px;
        padding: 0 20px 23px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &_content {
            font-size: 16px;
            line-height: 180%;
            /* or 29px */

            color: #ffffff;
        }
    }

    @include atSmall {
        &__credit {
            padding: 0 40px 60px;
        }
    }

    @include atMedium {
        &__credit {
            padding: 0 120px 60px;
        }
    }
}
</style>
