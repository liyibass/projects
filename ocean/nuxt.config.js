import {
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL,
    SITE_OG_IMAGE,
    SITE_BASE,
    FB_APP_ID,
} from './configs/metaConfig'

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: SITE_TITLE,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: SITE_TITLE,
            },
            {
                name: 'description',
                hid: 'og:description',
                property: 'og:description',
                content: SITE_DESCRIPTION,
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: SITE_OG_IMAGE,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: SITE_URL,
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'article',
            },
            {
                hid: 'fb:app_id',
                property: 'fb:app_id',
                content: FB_APP_ID,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            //     {
            //         src:
            //             'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
            //     },
            // {
            //     src:
            //         'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.js',
            // },
            //     {
            //         src:
            //             'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
            //     },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/scss/global.style.scss',
        '~assets/scss/responsiveMixin.scss',
        '~assets/scss/variable.scss',
    ],
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {
            src: '~plugins/vue-scrollmagic.js',
            ssr: false,
        },
        {
            src: '~plugins/vue-lazyload.js',
            ssr: false,
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [['@nuxtjs/google-analytics']],
    googleAnalytics: {
        id: () => {
            return 'UA-83609754-1'
        },
    },
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/style-resources'],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    styleResources: {
        scss: ['./assets/scss/*.scss'],
    },

    generate: {
        subFolders: false,
    },
    router: {
        mode: 'history',
        base: SITE_BASE,

        extendRoutes(routes) {
            routes.push({
                path: '/index.html/',
                redirect: '/',
            })
        },
    },
}
