import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Personagem from "./Personagem";
import Episodio from "./Episodio";

const Routes = () => {
   return(
       <BrowserRouter>
            
           <Route component = { Personagem }  path="/" exact />
           <Route component = { Episodio }  path="/episodio" />
       </BrowserRouter>
   )
}

export default Routes;