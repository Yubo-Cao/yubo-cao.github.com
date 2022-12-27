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
  900: "#0c4a6e",
}
const primaryColors = Object.entries(primary).reduce((acc, [key, value]) => {
  acc[`primary-${key}`] = value
  return acc
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': primary[500],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        ...primaryColors,
      }),
      textColor: theme => ({
        ...theme('colors'),
        ...primaryColors,
      }),
      borderColor: theme => ({
        ...theme('colors'),
        ...primaryColors,
      }),
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
