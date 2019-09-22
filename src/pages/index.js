import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Container from '../components/contentContainer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
    <h1>THIS IS THE HOME PAGE</h1>
    </Container>
    
  </Layout>
)

export default IndexPage
