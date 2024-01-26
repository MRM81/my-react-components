import GridLayout from "./Components/GridLayout";
import { Stack } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { appTheme } from "./themes/theme";
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Header id="top"/>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={{xs: "10px", sm: "30px", md: "50px"}}
      >
        <GridLayout />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
