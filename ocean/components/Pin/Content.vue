<template>
    <div class="Content" :class="`Content__${focusState}`">
        <div class="Content__name">
            {{ pin.name }}
        </div>
        <div class="Content__englishName">
            {{ pin.englishName }}
        </div>

        <div class="Content__detail">
            {{ pin.detail }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['pin', 'focusState'],
}
</script>

<style lang="scss" scoped>
.Content {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    // text opacity transition

    transition: all 1s ease-in-out;

    &__name {
        font-weight: normal;
        line-height: 100%;

        color: #fdffff;

        margin-bottom: 4px;
    }
    &__englishName {
        font-weight: 300;
        /* identical to box height */
        text-align: center;

        /* White */
        color: #fdffff;
        opacity: 0.7;

        margin-bottom: 8px;
    }

    &__detail {
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

    @include atSmall {
        width: calc(40vw);
        max-width: 437px;
        margin-left: 12px;
        align-items: flex-start;

        &__englishName {
            margin-bottom: 0;
        }

        &__detail {
            margin: 0;
            margin-top: 12px;
        }
    }

    @include atMedium {
        width: 348px;
    }
}

.Content__small {
    &__name {
        font-size: 16px;
    }
    &__englishName {
        font-size: 12px;
        line-height: 17px;
    }
}

.Content__large {
    &__name {
        font-size: 22px;
    }
    &__englishName {
        font-size: 16px;
        line-height: 22px;
    }
}

.Content__mid {
    &__name {
        font-size: 18px;
    }
    &__englishName {
        font-size: 14px;
        line-height: 20px;
    }
}

.Content__focus {
    .Content__detail {
        opacity: 1;
        // text opacity transition
        transition: all 0.8s ease-in-out;
        transition-delay: 1s;
    }

    @include atSmall {
        margin-top: -108px !important;
        margin-left: 40px;
    }

    @include atMedium {
        margin-top: -110px !important;
        margin-left: 32px;
    }
}

.Content__unFocus {
    opacity: 0.1 !important;
}

// switch thumbnail and text's position
.Content__last_child {
    @include atSmall {
        position: absolute;
        right: calc(100% + 30px + 40px);
    }

    @include atMedium {
        position: absolute;
        right: calc(100% + 30px + 60px);
    }
}
</style>
