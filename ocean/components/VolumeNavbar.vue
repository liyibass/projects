<template>
    <div class="VolumeNavbar" :style="{ top: getTopHeight }">
        <VolumeIcon :isMuted="isMuted" :isMutedToggle="isMutedToggle" />
    </div>
</template>

<script>
import VolumeIcon from '../components/VolumeIcon'
import { setScrollDirection } from '../utils/getScrollDirection'

export default {
    components: {
        VolumeIcon,
    },

    props: ['isMuted', 'isMutedToggle', 'forceShowIcon'],
    data() {
        return {
            direction: 'up',
        }
    },

    computed: {
        getTopHeight() {
            console.log(this.direction)
            if (this.direction === 'down' && this.forceShowIcon === false) {
                return '-64px'
            } else {
                return '16px'
            }
        },
    },

    mounted() {
        var lastScrollTop = 0

        setScrollDirection(this)
    },
}
</script>

<style lang="scss" scoped>
.VolumeNavbar {
    z-index: 9999;

    position: fixed;
    top: 16px;
    left: 12px;
    width: 48px;

    transition: top 0.5s ease;
}
</style>
