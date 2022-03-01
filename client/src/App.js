import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import NosFonds from "./pages/NosFonds/NosFonds";
import ResponsabilitéSociale from "./pages/ResponsabilitéSociale/RésponsabilitéSociale";
import NosRéalisations from "./pages/NosRéalisations/NosRéalisations";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nos-fonds" exact component={NosFonds} />
        <Route
          path="/responsabilité-sociale"
          exact
          component={ResponsabilitéSociale}
        />
        <Route path="/nos-réalisations" exact component={NosRéalisations} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
