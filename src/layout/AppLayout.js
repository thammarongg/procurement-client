import React, { Component } from "react"
import Layout from "./Layout"
import TopNav from "../components/TopNav"

import "semantic-ui-css/semantic.min.css"

class AppLayout extends Component {
  render() {
    return (
      <Layout top={<TopNav />}>
      </Layout>
    )
  }
}

export default AppLayout
