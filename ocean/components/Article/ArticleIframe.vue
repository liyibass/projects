<template>
    <div class="ArticleIframe">
        <div class="ArticleIframe__iframe" ref="iframeRef">
            <!-- <img :src="imageUrl" :alt="comment" /> -->
            <iframe
                :src="iframeUrl"
                frameborder="0"
                :height="iframeHeight"
            ></iframe>
        </div>

        <div class="ArticleIframe__comment">
            <!-- {{ comment }} -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['iframeUrl'],

    data() {
        return {
            iframeHeight: 400,
        }
    },

    mounted() {
        const iframeWidth = this.$refs.iframeRef.clientWidth
        this.iframeHeight = iframeWidth > 450 ? iframeWidth / 2 : iframeWidth
    },
}
</script>

<style lang="scss" scoped>
.ArticleIframe {
    position: relative;
    box-sizing: content-box;
    &__iframe {
        iframe {
            width: 100%;
        }
    }

    &__comment {
        font-family: PingFang TC;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 150%;
        /* identical to box height, or 19px */
        text-align: justify;

        /* Gray */
        color: #4d4d4d;
        opacity: 0.66;

        margin: 12px 20px 24px;
    }

    @include atSmall {
        max-width: 550px;
        margin: 0 40px;
    }

    @include atLarge {
        max-width: none;
        // width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        margin-bottom: 32px;

        &__iframe {
            width: 66.889%;
            // width: 100%;
            // max-width: 800px;
        }

        &__comment {
            width: 33.111%;
            margin: 12px 16px 0;
        }
    }

    @include atSuperLarge {
        &__iframe {
            width: 800px;
        }
    }
}
</style>
