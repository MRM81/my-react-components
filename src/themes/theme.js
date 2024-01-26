import { createTheme } from "@mui/material/styles";
 
export const appTheme = createTheme({
    palette: {
        primary: {
          light: "#278F40",
          main: "#174D24",
          dark: "#0B3114",
        },
        // secondary: {
        //   light: "#278F40",
        //   main: "#11cb5f",
        //   dark: pink[700],
        // },
        grey: {
          light:"#c5c5c5",
          main: "#686868",
          dark:"#232323",
        }
      },
      typography: {
        fontFamily: [
          '-apple-system',
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
});