import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
    indigo500,
    indigo700,
    indigo100,
    grey100,
    grey300,
    grey500,
    deepOrange500,
    white,
    grey900,
    fullBlack
} from "material-ui/styles/colors";
import {fade} from "material-ui/utils/colorManipulator";


export default ({children}) => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme({
            spacing: {
                iconSize: 24,
                desktopGutter: 24,
                desktopGutterMore: 32,
                desktopGutterLess: 16,
                desktopGutterMini: 8,
                desktopKeylineIncrement: 64,
                desktopDropDownMenuItemHeight: 32,
                desktopDropDownMenuFontSize: 15,
                desktopDrawerMenuItemHeight: 48,
                desktopSubheaderHeight: 48,
                desktopToolbarHeight: 56
            },
            fontFamily: 'Roboto, sans-serif',
            palette: {
                primary1Color: indigo500,
                primary2Color: indigo700,
                primary3Color: indigo100,
                accent1Color: deepOrange500,
                accent2Color: grey100,
                accent3Color: grey500,
                textColor: grey900,
                alternateTextColor: white,
                canvasColor: white,
                borderColor: grey300,
                disabledColor: fade(grey900, 0.3),
                pickerHeaderColor: indigo500,
                clockCircleColor: fade(grey900, 0.07),
                shadowColor: fullBlack
            }
        })}>
            {children}
        </MuiThemeProvider>
    );
}
