import "styled-components"

declare module "styled-components" {

    export interface DefaultTheme {
        theme: string,

        colors: {
            titles: string,
            text: string,
            background: string
        },
    }
}