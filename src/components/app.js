const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const CurrentWeather = require("./currentWeather");
const Home = require("./home");
const Footer = require("./footer");

function App() {
  let pageTitle = "WEATHER TODAY";
  let navLinks = ["Home", "About", "Weather"];

  return (
    <BrowserRouter>
      <Nav title={pageTitle} navLinks={navLinks} />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/currentWeather">
          <CurrentWeather />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

module.exports = App;
