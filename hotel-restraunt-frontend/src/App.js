import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, PageOne, PageTwo } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pageone">
          <PageOne />
        </Route>
        <Route exact path="/pagetwo">
          <PageTwo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
