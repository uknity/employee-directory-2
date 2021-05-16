import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";


function App() {
  
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
        <Homepage />
          {/* <Route exact path="/" component={Homepage} /> */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
