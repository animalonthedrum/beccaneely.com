import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from '../components/contentContainer'

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    weenie: file(relativePath: { eq: "weenie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <Layout navType='intro-container'>
    <Container name='container'>
    <Img fluid={data.weenie.childImageSharp.fluid} />
    <Img fluid={data.weenie.childImageSharp.fluid} />
    <Img fluid={data.weenie.childImageSharp.fluid} />
    <Img fluid={data.weenie.childImageSharp.fluid} />
    <Img fluid={data.weenie.childImageSharp.fluid} />
    <Img fluid={data.weenie.childImageSharp.fluid} />
    </Container>
  </Layout>

)
}

export default About
