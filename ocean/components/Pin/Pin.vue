<template>
    <div class="Pin Pin__readyToGrow" :class="`Pin__${pin.size}`">
        <Thumbnail
            :class="`Thumbnail__${pin.size}`"
            :pin="pin"
            :focusState="focusState"
        />

        <Content
            :class="`Content__${pin.size}`"
            :pin="pin"
            :focusState="focusState"
        />

        <audio
            class="audio pinAudio"
            :class="`audio${pin.id}`"
            :src="pin.audioUrl"
            loop
        ></audio>
    </div>
</template>

<script>
import Thumbnail from './Thumbnail'
import Content from './Content'

export default {
    props: ['pin', 'focusState'],
    components: {
        Thumbnail,
        Content,
    },

    data() {
        return {
            isExpanded: false,
        }
    },

    updated() {
        let audioPlayer

        switch (this.focusState) {
            case 'focus':
                audioPlayer = document.querySelector(`.audio${this.pin.id}`)
                audioPlayer.play()
                break

            default:
                // unFocus and other state
                audioPlayer = document.querySelector(`.audio${this.pin.id}`)
                audioPlayer.pause()
                break
        }
    },
}
</script>

<style lang="scss">
.Pin {
    position: absolute;
    top: 30px;
    left: 0;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    // movement transition
    transition: all 0.5s ease-in-out;

    @include atSmall {
        flex-direction: row;
    }

    @include atMedium {
    }

    &:last-child {
        // switch thumbnail and text's position
        .Content__focus {
            @include atSmall {
                position: absolute;
                right: calc(100% + 30px + 40px);
            }

            @include atMedium {
                position: absolute;
                right: calc(100% + 30px + 60px);
            }
        }
    }
}

.Pin__readyToGrow {
    transform: translateY(400%) !important;

    .Thumbnail {
        &__image {
            // transform: scale(0) !important;
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 0;
        }

        &__pin {
            border-top: 1px solid rgba(255, 255, 255, 0.25) !important;
        }
    }
    .Content {
        opacity: 0;
    }
}

.Pin__small {
    top: 28.561%;
    left: 9.063%;

    @include atSmall {
        top: 9.375%;
        left: 13.542%;
    }

    @include atMedium {
        top: 19.383%;
        left: 12.431%;
    }
}

.Pin__large {
    top: 44.28%;
    left: 40%;

    @include atSmall {
        top: 28.125%;
        left: 26.042%;
    }

    @include atMedium {
        top: 29.259%;
        left: 34.772%;
    }
}

.Pin__mid {
    top: 33.864%;
    left: 77.813%;

    @include atSmall {
        top: 19.531%;
        left: 60.417%;
    }

    @include atMedium {
        top: 17.284%;
        left: 74.583%;
    }
}
</style>
