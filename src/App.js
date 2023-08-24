import GlobalStyled from './Styled/GlobalStyled';
import Main from './Page/Main';
import About from './Page/About';
import Contact from './Page/Contact';
import Project from './Page/Project';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Styled/them';
import media from './Styled/media';
import { AnimatePresence } from 'framer-motion';
import Navigation from './Components/Navigation';

const menu = [{
  id: 1,
  menu: "About",
  url: '/about'
},
  {
  id: 2,
  menu: "Project",
  url: '/project'
},
  {
  id: 3,
  menu: "Contact",
  url: '/contact'
}];

function App() {

  return (
    <ThemeProvider theme={{...theme, ...media}}>
      <GlobalStyled />
      <AnimatePresence>
        <Navigation menus={menu}/>
        <Routes> 
          <Route path='/' element={<Main menu={menu} />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
