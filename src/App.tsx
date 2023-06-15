import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderResponsive from './Header';
import { MantineProvider } from '@mantine/core';
import Home from './Home';
import FooterSimple from './Footer';
import AnhaengerM from './AnhaengerM';
import AnhaengerS from './AnhaengerS';
import AnhaengerXL from './AnhaengerXL';
import AnhaengerAT from './AnhaengerAT';
import AnhaengerL from './AnhaengerL';
import Impressum from './Impressum';
import Cookies from './Cookies';
import Datenschutzerklärung from './Datenschutz';
import './App.css';

function App() {
  const links = [
    { link: '/', label: 'Home' },
    { link: '/anhaenger', label: 'Anhänger' },
    { link: '/impressum', label: 'Impressum' },
  ];

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('user-has-accepted-cookies');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('user-has-accepted-cookies', 'true');
    setShowBanner(false);
  };

  return (
    <BrowserRouter>
      <MantineProvider theme={{ fontFamily: 'helvetica' }} withGlobalStyles withNormalizeCSS>
        <div className="app-container">
          <HeaderResponsive links={links} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anhaenger" element={<AnhaengerM />} />
            <Route path="/anhaengerM" element={<AnhaengerM />} />
            <Route path="/anhaengerL" element={<AnhaengerL />} />
            <Route path="/anhaengerS" element={<AnhaengerS />} />
            <Route path="/anhaengerXL" element={<AnhaengerXL />} />
            <Route path="/anhaengerAt" element={<AnhaengerAT />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutzerklärung />} />
          </Routes>
          <FooterSimple />

          {showBanner && (
            <div className="cookie-banner">
              <Cookies click={handleAcceptCookies} />
            </div>
          )}
        </div>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App