import React, { Fragment } from "react";
import {
  BrowserRouter,
  Route,
  Routes as RouterDomRoutes,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Cards from "./pages/Cards/Cards.js";
import Decks from "./pages/Decks/Decks.js";
import Tags from "./pages/Tags/Tags.js";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <RouterDomRoutes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/tags" element={<Tags />} />
        </RouterDomRoutes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
