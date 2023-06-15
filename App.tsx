
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderResponsive from './Header'
import { MantineProvider } from '@mantine/core';
import Home from './Home'
import FooterSimple from './Footer';
import AnhaengerM from './AnhaengerM';
import AnhaengerS from './AnhaengerS';
import AnhaengerXL from './AnhaengerXL';
import AnhaengerAT from './AnhaengerAT';
import AnhaengerL from './AnhaengerL';
import Impressum from './Impressum';

function App() {


  const links = [
    { link: '/', label: 'Home' },
    { link: '/anhaenger', label: 'Anhänger' },
    { link: '/impressum', label: 'Impressum' },
   
  ];


  
  return (
    
<BrowserRouter>
<MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
<HeaderResponsive links={links} />
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Anhaenger' element={<AnhaengerM/>}/>
  <Route path='/AnhaengerM' element={<AnhaengerM/>}/>
  <Route path='/AnhaengerL' element={<AnhaengerL/>}/>
  <Route path='/AnhaengerS' element={<AnhaengerS/>}/>
  <Route path='/AnhaengerXL' element={<AnhaengerXL/>}/>
  <Route path='/AnhaengerAt' element={<AnhaengerAT/>}/>
  <Route path='/Impressum' element={<Impressum/>}/>

</Routes>


<FooterSimple links={links}/>

    </MantineProvider>


    </BrowserRouter>
  );
}

export default App;
