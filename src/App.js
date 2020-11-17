import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
          <Route path="/work">
            <OurWork />
          </Route>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
