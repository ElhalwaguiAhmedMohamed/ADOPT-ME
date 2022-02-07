import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import { StrictMode } from "react";

//import Pet from "./Pet";

import SearchParams from "./SearchParams";
import { useState } from "react/cjs/react.development";

const App = () => {
  const theme = useState("darkblue"); //passed theme
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link>
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              {/*id is a param to read from the url*/}
              {/* this mathces noth routes */}
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
