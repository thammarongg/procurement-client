import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"

import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"

ReactDOM.render(
  <Router>
   <section className='app'>
    <Route exact path="/" component={AppLayout} />
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
   </section>
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
