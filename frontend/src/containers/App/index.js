import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";
import Albums from "../Albums";
import Video from "../Video";
import Contato from "../Contato";
import Bio from "../Bio";
import Home from "../Home";
import Album from "../Album";

function App() {
  const [currAlbum, setCurrAlbum] = useState("");
  return (
    <div className="App">
      <Nav currAlbum={currAlbum} />
      <Switch>
        <Route
          path="/"
          render={(props) => <Home {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
        <Route
          path="/albums"
          render={(props) => <Albums {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
        <Route
          path="/album/:id"
          render={(props) => <Album {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
        <Route
          path="/audiovisual"
          render={(props) => <Video {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
        <Route
          path="/biography"
          render={(props) => <Bio {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
        <Route
          path="/contact"
          render={(props) => <Contato {...props} setCurrAlbum={setCurrAlbum} />}
          exact
        />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
