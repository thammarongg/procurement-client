import React from "react"

const Layout = ({ top, children, bottom }) => {
  return (
    <div className="layout">
      <div className="layout__top">
        {top}
      </div>
      <div className="layout__children">
        {children}
      </div>
      <div className="layout__bottom">
        {bottom}
      </div>
    </div>
  )
}

export default Layout
