<template>
    <div
        class="Beach"
        id="Beach"
        ref="beachRef"
        :style="{ height: `${wrapperHeight}px` }"
    >
        <div class="Beach__fix_wrapper">
            <div class="Beach__background">
                <picture>
                    <source
                        media="(min-width:760px)"
                        srcset="../static/images/3.jpg"
                        alt="ocean"
                    />
                    <source
                        media="(min-width:480px)"
                        srcset="
                            ../static/images/pad/3@1x.png 1x,
                            ../static/images/pad/3@2x.png 2x
                        "
                        alt="ocean"
                    />

                    <img
                        srcset="
                            ../static/images/mobile/3@1x.png 1x,
                            ../static/images/mobile/3@2x.png 2x,
                            ../static/images/mobile/3@3x.png 3x
                        "
                        alt="ocean"
                    />
                </picture>
            </div>

            <div class="Beach__text1 hide_text">
                「妳注意過電影如何呈現人類在水下聽見的聲音嗎？」聲音藝術家Yannick
                Dauby
                說：「總是咕嚕咕嚕。」但那是不正確的，「咕嚕咕嚕是人背著氣瓶下水時發出的呼息，而非海洋的聲音。」
            </div>
            <div class="Beach__text2 hide_text">
                <div class="Beach__text2_content ">
                    Yannick
                    領我走進書房，點開電腦中的音檔，房間隨後環繞一塊油脂豐滿的三層肉在鍋裡煎熬的劈啪聲響。然那並非油花彈跳，而是他利用特製水下錄音器材捕捉到的槍蝦聲音。
                </div>
            </div>

            <div class="Beach__blenk" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wrapperHeight: 'none',
        }
    },
    async mounted() {
        // -------------------------------------------------------
        // Handle fix component,hover by next component
        // need to define data.wrapperHeight
        // and assign it to parent's height
        let fixWrapperDOM
        const nextComponentClass = '.Stage'
        const currentComponentWrapperClass = '.Beach__fix_wrapper'

        const fixAndHoverScene = this.$scrollmagic
            .scene({
                triggerElement: nextComponentClass,
                offset: 0,
                triggerHook: 1,
                duration: 1000,
            })
            .on('enter', (e) => {
                fixWrapperDOM = document.querySelector(
                    currentComponentWrapperClass
                )
                // get wrapper's height,then assign to parient
                this.wrapperHeight = fixWrapperDOM.clientHeight
                // fix css
                fixWrapperDOM.style.position = 'fixed'
                fixWrapperDOM.style.width = '100%'
                fixWrapperDOM.style.bottom = '0px'
            })
            .on('leave', (e) => {
                // unfix css
                fixWrapperDOM.style.position = 'relative'
            })
        // .addIndicators({ name: 'fixStoryScene' })

        // -------------------------------------------------------

        this.$scrollmagic.addScene([fixAndHoverScene])
    },
}
</script>

<style lang="scss" scoped>
.Beach {
    z-index: 103;
    position: relative;
    background: white;

    font-size: 1rem;
    line-height: 180%;
    text-align: justify;

    &__background {
        img {
            width: 100%;
        }
    }

    &__text1 {
        color: #fdffff;

        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        text-align: justify;

        position: absolute;
        top: 3.218%;
        left: 6.79%;

        border-left: 1px solid white;
        padding-left: 16px;

        width: 240px;
    }

    &__text2 {
        color: #4d4d4d;
        display: flex;
        flex-direction: column;
        align-items: center;

        border-top: 2px solid rgb(214, 214, 214);
        border-bottom: 2px solid rgb(214, 214, 214);
        padding: 1rem 4px;
        margin: 32px 20px 0px;

        width: auto;
        &_content {
            width: 100%;
        }
    }

    &__blenk {
        background: white;
        width: 100%;
        height: 30vh;
    }

    &__fix_wrapper {
        padding-bottom: 32px;
    }

    @include atSmall {
        &__text1 {
            top: 6.344%;
            left: 5.202%;

            width: 400px;
        }

        &__text2 {
            color: #4d4d4d;

            padding: 24px 60px;
            margin: 48px 84px 0px;
        }

        &__fix_wrapper {
            padding-bottom: 48px;
        }
    }

    @include atMedium {
        &__text1 {
            top: 13.758%;
            left: 9.098%;

            width: 427px;
        }

        &__text2 {
            color: #4d4d4d;

            padding: 24px 60px;
            margin: 48px auto;
            max-width: 840px;
            &_content {
                width: 654px;
            }
        }
    }
}
</style>
