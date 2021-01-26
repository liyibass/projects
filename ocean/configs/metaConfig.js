const { app } = require('./config')

export const SITE_TITLE = '珊瑚礁的寂聲終章——暖化與末日災難的先知'
export const SITE_DESCRIPTION =
    '你聽過珊瑚礁的聲音嗎？你知道健康珊瑚礁對人類的意義嗎？它們因為暖化發出的瀕死訊號，是末世災難來襲的預兆。'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.png`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `ocean`
