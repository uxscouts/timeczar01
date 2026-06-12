import Navigation from "../components/Navigation";
import TestApp from "../components/Navigation2";
import ResponsiveNavigation from "../components/Navigation3";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// always import the components this way with MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#646cff', // Vite's default purple accent color
    },
  },
});

function App() {
  return (
    <>
      <ResponsiveNavigation/>
    </>
  );
}

export default App;


