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
// indigo
const secondary = {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
};
const secondaryColors = Object.entries(secondary).reduce(
    (acc, [key, value]) => {
        acc[`secondary-${key}`] = value;
        return acc;
    }
);
const colors = {
    ...primaryColors,
    ...secondaryColors
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./content/**/*.mdx"
    ],
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
                    "var(--font-inter)",
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
            maxWidth: {
                "1/2": "50%"
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                ...colors
            }),
            textColor: (theme) => ({
                ...theme("colors"),
                ...colors
            }),
            borderColor: (theme) => ({
                ...theme("colors"),
                ...colors
            }),
            boxShadowColor: (theme) => ({
                ...theme("colors"),
                ...colors
            }),
            gradientColorStops: (theme) => ({
                ...theme("colors"),
                ...colors
            }),
            gridTemplateColumns: (theme) => {
                const spacing = theme("spacing");
                return {
                    ...Object.keys(spacing).reduce(
                        (accumulator, spacingKey) => {
                            return {
                                ...accumulator,
                                [`fit-${spacingKey}`]: `repeat(auto-fit,minmax(${spacing[spacingKey]}, 1fr))`
                            };
                        },
                        {}
                    ),
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
