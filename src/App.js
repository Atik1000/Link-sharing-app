import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import PreviewPage from './pages/PreviewPage';
import LinksPage from './pages/LinksPage';
import { StoreProvider } from './store/StoreContext';


const theme = createTheme({
  palette: {
    primary: {
      main: '#633CFF',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LinksPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;