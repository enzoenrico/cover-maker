const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()]
}

