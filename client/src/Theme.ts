import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline";


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#260101",
    },
    secondary: {
      main: "#3c4545",
    },
    type: "dark", 
    background:{
      default: "#212626"
    },
  },
  typography: {
    fontFamily: [
      'Texturina',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         backgroundImage:
  //           "url(https://i.pinimg.com/originals/83/f7/21/83f72186ce6ac2004ae4d57c3d4bcb19.jpg)"
  //       }
  //     }
  //   }
  // } 

});

// theme.props = {
//  
// }