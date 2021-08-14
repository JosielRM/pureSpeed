import { createMuiTheme } from "@material-ui/core/styles";
import { primarColor, neutralColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: { 
            main: primarColor,
            contrastTaxt: "white"
        },
        text: {
            primary: neutralColor
        }
    }
})
 export default theme