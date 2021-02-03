<template>
    <div class="WhiteBlock">
        <div class="WhiteBlock__line">
            <img src="@/static/images/divider.png" alt="" />
        </div>

        <div class="WhiteBlock__content hide_text">
            Yannick
            領我走進書房，點開電腦中的音檔，房間隨後環繞一塊油脂豐滿的三層肉在鍋裡煎熬的劈啪聲響。然那並非油花彈跳，而是他利用特製水下錄音器材捕捉到的槍蝦聲音。
        </div>

        <div class="WhiteBlock__line">
            <img src="@/static/images/divider.png" alt="" />
        </div>
        <div class="WhiteBlock__blank" />
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'
export default {}
</script>

<style lang="scss" scoped>
.WhiteBlock {
    color: #4d4d4d;
    display: flex;
    flex-direction: column;
    align-items: center;

    // border-top: 2px solid rgb(214, 214, 214);
    // border-bottom: 2px solid rgb(214, 214, 214);
    padding: 1rem 4px;
    margin: 32px 20px 0px;

    width: auto;
    background: white;

    &__line {
        img {
            width: 100%;
            height: 3px;
            display: block;
        }
    }

    &__content {
        width: 100%;
        padding: 16px 0;
        transition: opacity 0.5s ease;
    }

    &__blank {
        background: white;
        width: 100%;
        height: 40vh;
    }

    @include atSmall {
        color: #4d4d4d;

        padding: 24px 60px;
        margin: 48px 84px 0px;
    }

    @include atMedium {
        color: #4d4d4d;

        padding: 24px 60px;
        margin: 48px auto;
        max-width: 840px;
        &__content {
            width: 654px;
        }
    }
}
</style>
