import type { Config } from "tailwindcss";
import { colors } from './src/branding/colors.config';
import { fonts } from './src/branding/fonts.config';
import { theme as themeConfig } from './src/branding/theme.config';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                secondary: colors.secondary,
                accent: colors.accent,
                neutral: colors.neutral,
            },
            fontFamily: {
                sans: fonts.sans,
                heading: fonts.heading,
            },
            borderRadius: themeConfig.borderRadius,
            container: themeConfig.container,
        },
    },
    plugins: [],
};
export default config;
