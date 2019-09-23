import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";


import DesktopNav from './desktopNavigationScroll';
import Footer from './footer';
import VerticalSocial from "./verticalFooter";
import "./layout.scss"
import "../index.scss"


const Layout = ({ children, name, navType }) => {

  return (
    <div className={navType}>
    <Helmet>
    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/737218/727688/css/fonts.css" />
    </Helmet>
        <DesktopNav/>
        <main className={name}>
        {children}
        <Footer/>
        </main>
       
        <VerticalSocial/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
