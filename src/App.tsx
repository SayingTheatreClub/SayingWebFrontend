import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Member from "./pages/Member";
import About from "./pages/About";
import Play from "./pages/Play";
import Test from "./pages/Test/test";
import Join from "./pages/Join";
import Record from "./pages/Past";
function App() {
  return (
    <BrowserRouter
    forceRefresh={true}
    >
        <Route path="/" exact component={Home} />
        <Route path="/member" component={Member} />
        <Route path="/about" component={About} />
        <Route path="/test" component={Test} />
        <Route path="/play/:name" component={Play} />
        <Route path="/join" component={Join} />
        <Route path="/past" component={Record} />
    </BrowserRouter>
  );
}

export default App;
