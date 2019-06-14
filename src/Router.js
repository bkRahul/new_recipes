import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "./App.js";
import Recipe from "./components/Recipe.js";

const Router = () => {

return (
<BrowserRouter>
        <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
)
}

export default Router