import { createTheme, ThemeProvider } from "@mui/system";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ee4d2d", // Your desired primary color
    },
    secondary: {
      main: "#f3826c", // Your desired secondary color
    },
  },
  typography: {
    padding:"0",
    paddingBottom: "1rem",
  },
});

<ThemeProvider theme={theme}></ThemeProvider>

background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    height: 5rem;
    margin-right: .75rem;
    padding: .25rem;
    width: 5rem;

    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    height: 1rem;
    margin-bottom: .5rem;
    padding: .25rem;
    width: 4.25rem;



    background-color: #fff;
    border-radius: .125rem;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    box-sizing: border-box;
    height: 1.875rem;
    margin-bottom: .5rem;
    margin-right: .5rem;
    overflow: hidden;
    padding: .25rem;
    width: 3.75rem;