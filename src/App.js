import React from 'react'
import './sass/app.scss';
import Header from './header/header'
import { ThemeProvider } from './context/context';
import Main from './main/Main';
import Footer from './footer/footer';

function App() {
  
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
