import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
