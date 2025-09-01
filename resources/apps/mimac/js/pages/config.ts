export type SiteConfig = {
  name: string
  logo: string
  heroBackground: string
}

const DEFAULTS: SiteConfig = {
  name: 'Keystone BuildCo',
  logo: '/src/assets/logo.svg',
  heroBackground: '/src/assets/hero-grid.svg'
}

// Allow overrides by attaching window.__SITE_CONFIG__ = { ... } before the app loads
declare global {
  interface Window { __SITE_CONFIG__?: Partial<SiteConfig> }
}

export const SITE: SiteConfig = Object.assign({}, DEFAULTS, window.__SITE_CONFIG__ || {})
