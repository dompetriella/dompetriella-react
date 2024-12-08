/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: '#63A66A', // lightModePrimary
        lightGreenSecondary: '#76C77E', // lightModeSecondary
        yellowHighlight: '#D0C777', // lightModeHighlight

        blueTertiary: '#639AA6', // lightModeSplashPrimary
        lightblueSecondary: '#63A6A2', // lightModeSplashSecondary
        blueGreenTertiary: '#63A68E', // lightModeSplashTertiary

        blackPrimary: '#1E1E1E', // darkModePrimary
        lightBlackSecondary: '#2B2B2C', // darkModeSecondary
        orangeHighlight: '#C8651D', // darkModeHighlight

        lightGreyTertiary: '#E8E4E4', // darkModeSplashPrimary
        greyTertiary: '#606061', // darkModeSplashSecondary
        darkGreyTertiary: '#222222', // darkModeSplashTertiary

        white: '#E8E4E4', // lightText
        black: '#171717', // darkText
        darkGreenAuxilary: '#2B452D', // darkGreenText
        darkBlueAuxilary: '#385961', // darkBlueText
      },
    },
  },
  plugins: [],
}