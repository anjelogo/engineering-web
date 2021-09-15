export const pageview = (url) => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
