// styled.d.ts
import "styled-components";

declare module "styled-components" {

    export interface DefaultTheme {
        theme: string;

        colors: {
            titles: string;
            text: string;
            background: string;
        };

        fonts: {
            primary: string;
        };

        fontSizes: {
            header: string,
            h1: string,
            h2: string,
            h3: string,
            p: string,
            footer: string
        };
    }
}
