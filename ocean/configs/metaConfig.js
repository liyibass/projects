const { app } = require('./config')

export const SITE_TITLE = 'web title'
export const SITE_DESCRIPTION = 'web description'
export const SITE_URL = `${app.siteProtocol}://${app.domain}${app.base}`
export const SITE_DOMAIN = `${app.domain}${app.base}`
export const SITE_OG_IMAGE = `${app.siteProtocol}://${app.domain}${app.base}/images/og.jpg`
export const SITE_BASE = `${app.base}/`
export const FB_APP_ID = `ocean`
