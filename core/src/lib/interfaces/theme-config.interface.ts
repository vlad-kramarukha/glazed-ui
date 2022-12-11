export interface Scheme {
    light?: {
        fill?: string
        base?: string
        success?: string
        warn?: string
        error?: string
        text?: string
    }
    dark?: {
        fill?: string
        base?: string
        success?: string
        warn?: string
        error?: string
        text?: string
    }
}

export interface ThemeConfig {
    mode: string
    scheme: Scheme
}