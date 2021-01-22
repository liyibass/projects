<template>
    <div>
        <div id="scene1" class="scene scene1">1</div>

        <div id="scene2" class="scene">2</div>
        <div id="scene3" class="scene">3</div>
        <div id="scene4" class="scene">4</div>

        <div id="scene5" class="scene">5</div>
        <div id="scene6" class="scene">6</div>

        <div id="scene7" class="scene">7</div>

        <div id="scene8" class="scene">8</div>
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'
import debounce from 'lodash.debounce'

import { setScrollDirection } from '../../utils/getScrollDirection'

export default {
    data() {
        return {
            scrolled: false,
            currentScene: 1,
            isScrollSensorOn: false,
        }
    },
    methods: {
        scrollHandler(e) {
            console.log(e)
        },
    },

    // mounted() {
    //     const scrollerForward = scrollama()
    //     const scenes = document.querySelectorAll('.scene')

    //     let lastScrollTop = 0
    //     const _this = this

    //     document.addEventListener(
    //         'scroll',
    //         (e) => {
    //             if (_this.isScrollSensorOn === true) {
    //                 console.log('I am scrolling')
    //                 _this.isScrollSensorOn = false
    //             }
    //         },
    //         true
    //     )

    //     scrollerForward
    //         .setup({
    //             step: `.scene`,
    //             offset: 0,
    //         })
    //         .onStepEnter((response) => {
    //             const { element, index, direction } = response
    //             if (direction === 'down') {
    //                 this.$smoothScroll({
    //                     scrollTo: element,
    //                 })
    //                 setTimeout(() => {
    //                     _this.isScrollSensorOn = true
    //                 }, 1500)
    //             } else if (direction === 'up') {
    //             }
    //         })

    //     // setup resize event
    //     window.addEventListener('resize', scrollerForward.resize)
    // },

    // mounted() {
    //     const scrollerForward = scrollama()

    //     // setup the instance, pass callback functions
    //     scrollerForward
    //         .setup({
    //             step: `.scene`,
    //             offset: 0,
    //         })
    //         .onStepEnter((response) => {
    //             const { element, index, direction } = response
    //             if (direction === 'down') {
    //                 console.log(`Into Section ${element.id} (scroll down)`)

    //                 // this.$smoothScroll({
    //                 //     scrollTo: element,
    //                 //     // hash: '#sampleHash', // required if updateHistory is true
    //                 // })
    //             } else if (direction === 'up') {
    //                 console.log(`Into Section ${element.id} (scroll up)`)

    //                 // console.log(direction)
    //                 // this.$smoothScroll({
    //                 //     scrollTo: element,
    //                 // hash: '#sampleHash', // required if updateHistory is true
    //                 // })
    //             }
    //         })
    //         .onStepExit((response) => {
    //             // console.log('leave')
    //             // const { element, index, direction } = response
    //             // console.log(element)
    //             // console.log(direction)
    //         })

    //     // setup resize event
    //     window.addEventListener('resize', scrollerForward.resize)

    //     // ==================================================
    //     // const scrollerBackFoward = scrollama()

    //     // scrollerBackFoward
    //     //     .setup({
    //     //         step: `.scene`,
    //     //         offset: 0,
    //     //     })
    //     //     .onStepEnter((response) => {
    //     //         const { element, index, direction } = response
    //     //         if (direction === 'up') {
    //     //             console.log('Into Section (scroll up)')

    //     //             // this.$smoothScroll({
    //     //             //     scrollTo: element,
    //     //             //     // hash: '#sampleHash', // required if updateHistory is true
    //     //             // })
    //     //         } else if (direction === 'down') {
    //     //             // this.$smoothScroll({
    //     //             //     scrollTo: element,
    //     //             // hash: '#sampleHash', // required if updateHistory is true
    //     //             // })
    //     //         }
    //     //     })
    //     //     .onStepExit((response) => {
    //     //         // console.log('leave')
    //     //         // const { element, index, direction } = response
    //     //         // console.log(element)
    //     //         // console.log(direction)
    //     //     })

    //     // // setup resize event
    //     // window.addEventListener('resize', scrollerBackFoward.resize)
    // },
}
</script>

<style lang="scss" scoped>
.scene {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 100px;
}
#scene1 {
    background: red;
}

#scene2 {
    background: orange;
}

#scene3 {
    background: yellow;
}

#scene4 {
    background: green;
}

#scene5 {
    background: blue;
}

#scene6 {
    background: darkblue;
}

#scene7 {
    background: purple;
}

#scene8 {
    background: black;
}
</style>
