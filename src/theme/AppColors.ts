class AppColors {
    static greenPrimary = '#63A66A'; // lightModePrimary
    static lightGreenSecondary = '#76C77E'; // lightModeSecondary
    static yellowHighlight = '#D0C777'; // lightModeHighlight

    static blueTertiary = '#639AA6'; // lightModeSplashPrimary
    static lightBlueSecondary = '#63A6A2'; // lightModeSplashSecondary
    static blueGreenTertiary = '#63A68E'; // lightModeSplashTertiary

    static blackPrimary = '#1E1E1E'; // darkModePrimary
    static lightBlackSecondary = '#2B2B2C'; // darkModeSecondary
    static orangeHighlight = '#C8651D'; // darkModeHighlight

    static lightGreyTertiary = '#E8E4E4'; // darkModeSplashPrimary
    static greyTertiary = '#606061'; // darkModeSplashSecondary
    static darkGreyTertiary = '#222222'; // darkModeSplashTertiary

    static white = '#E8E4E4'; // lightText
    static black = '#171717'; // darkText
    static darkGreenAuxilary = '#2B452D'; // darkGreenText
    static darkBlueAuxilary = '#385961'; // darkBlueText
}

Object.freeze(AppColors); // Ensure the class is immutable

export default AppColors;
