import React from 'react';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import "./App.css";
import LeftDrawer from './components/LeftDrawer';

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});

const App = () => {
  const globeTheme = true;

  return (
    <ThemeProvider theme={globeTheme ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }} square={true}>
        <div className='app'>
          <LeftDrawer />
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
