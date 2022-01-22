import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages";
import { routes } from "./routes/routes";

import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" /> : <Home />
          </Route>
          {routes.map((item) => (
            <Route
              exact={item.exact}
              path={item.path}
              component={item.component}
              key={item.key}
            />
          ))}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
