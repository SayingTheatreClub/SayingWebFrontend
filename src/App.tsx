import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Member from "./pages/Member/member";
import About from "./pages/About/about";

import Test from "./pages/Test/test";
function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/member" component={Member} />
      <Route path="/about" component={About} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
