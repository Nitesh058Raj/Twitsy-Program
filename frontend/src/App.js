import "./App.css";
import React from 'react';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TweetsHomePage from "./components/TweetsHomePage";


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
          <Router>
            <Routes>
              <Route index element={<Layout />} />
              <Route path="/" element={<Layout />}>
                <Route path="home" element={<TweetsHomePage />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
