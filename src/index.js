import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"

import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"

ReactDOM.render(
  <Router>
    <Route exact path="/" component={AppLayout} />
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
