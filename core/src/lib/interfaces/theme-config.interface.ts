export interface Scheme {
    light?: {
        base?: string
        success?: string
        warn?: string
        error?: string
        text?: string
    }
    dark?: {
        base?: string
        success?: string
        warn?: string
        error?: string
        text?: string
    }
}

export interface ThemeConfig {
    scheme: Scheme
}