// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about';
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Error from "./pages/errPage";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
<Switch>
        <Route exact path={["/portfolio/", "/portfolio/about"]}>
    <About />
        </Route> 
        <Route exact path={["/portfolio/portfolio"]}>
    <Portfolio />
         </Route>
         <Route exact path={["/portfolio/contact"]}>
    <Contact />
         </Route>
         <Route>
    <Error/>
        </Route>     
</Switch>                    
    <Footer />
</BrowserRouter>      
  );
}

export default App;
