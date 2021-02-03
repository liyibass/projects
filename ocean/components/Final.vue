<template>
    <div class="Final" id="Final">
        <div class="Final__background">
            <LongImage image="23" :zoom="true" />
        </div>

        <div class="Final__credit">
            <div class="Final__credit_content hide_text">
                記者：胡慕情<br />
                攝影：鄒保祥、林煒凱<br />
                網頁製作：呂理詣、吳曼汝、米承鶴、李又如、陳姿廷、簡信昌<br />
                照片授權： 陳正虔（雀鯛、金鱗魚） 黃興倬（槍蝦） 呂翊齊（水母、豆丁海馬、海蛞蝓、珊瑚蟲） Yannick
                Dauby（水下錄音設備） 蘇淮、綠色和平（水下珊瑚礁）<br />

                聲音授權： 莫顯蕎（擬金眼鯛、金鱗魚） 陳正虔（雀鯛） Yannick Dauby（日本松球魚、海膽）<br />

                影片授權：蘇淮<br />
                影片配樂創作：顧玲瑜<br />

                發布日期：2021-02-07
            </div>
        </div>

        <div class="Final__mask" />
    </div>
</template>

<script>
import LongImage from './LongImage'

export default {
    components: {
        LongImage,
    },
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
            .setPin('.Final')
            .on('progress', (e) => {
                // this.maskOpacity = e.progress
                FinalMaskDOM.style.opacity = -e.progress + 1
            })
        // .addIndicators({ name: 'FinalScene' })

        this.$scrollmagic.addScene(backgroundDarkScene)
    },
}
</script>

<style lang="scss" scoped>
.Final {
    z-index: 109;
    position: relative;
    background: black;

    overflow: hidden;

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
            opacity: 1;
            transition: opacity 0.5s ease;
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
