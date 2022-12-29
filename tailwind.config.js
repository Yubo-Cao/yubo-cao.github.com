// sky
const primary = {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
};
const primaryColors = Object.entries(primary).reduce((acc, [key, value]) => {
    acc[`primary-${key}`] = value;
    return acc;
});

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: primary[500]
            },
            spacing: {
                102: "26rem",
                128: "32rem",
                144: "36rem",
                160: "40rem"
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji"
                ],
                mono: [
                    "Fira Code",
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace"
                ]
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                ...primaryColors
            }),
            textColor: (theme) => ({
                ...theme("colors"),
                ...primaryColors
            }),
            borderColor: (theme) => ({
                ...theme("colors"),
                ...primaryColors
            }),
            boxShadowColor: (theme) => ({
                ...theme("colors"),
                ...primaryColors
            }),
            gradientColorStops: (theme) => ({
                ...theme("colors"),
                ...primaryColors
            }),
            gridTemplateColumns: (theme) => {
                const spacing = theme("spacing");
                return {
                    ...Object.keys(spacing).reduce((accumulator, spacingKey) => {
                        return {
                            ...accumulator,
                            [`fit-${spacingKey}`]: `repeat(auto-fit,minmax(${spacing[spacingKey]}, 1fr))`
                        };
                    }, {}),
                    ...{
                        nav: "1fr 24rem"
                    }
                };
            }
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal",
            square: "square",
            roman: "upper-roman"
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
