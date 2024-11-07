declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: string
        readonly PORT: number
    }
}
