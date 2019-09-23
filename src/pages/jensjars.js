import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from '../components/contentContainer';
import FullWidth from '../components/fullWidth';

const JensJars = () => {
  if(window.location.pathname === '/jensjars'){
    document.body.classList.add('jens-jars');
  }
  
  const data = useStaticQuery(graphql`
  query {
    jj: file(relativePath: { eq: "/jensjars/JJ.jpg" }) {
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
      <FullWidth name='hero-expand'>
      <Container name=''>
      <h1>Jen's Jars</h1>
        <p>I had the pleasure of working with Minnetonka based business owner, Jen Alexander, on the branding of her plant-based soups and spreads. Jen is on a mission to make healthy, real food that is equal parts nutritious, convenient, and delicious. Jen wanted a handcrafted, bountiful and playful look for her brand. I designed a branding package that included her logotype, unique brand illustrations, labels and signage for her markets and in-store demos. You can find these flirty little jars on the shelves at Lakewinds co-op locations and seasonally at many of Minneapolis’ farmers markets.</p>
        <p><b>Scope:</b> Logo, lettering, brand illustrations, packaging, style guide, signage</p>
      </Container>
      </FullWidth>
      <Container name='row'>
        <Img fluid={data.jj.childImageSharp.fluid} />
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row-one-two'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row-two-one'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
      <Container name='row'>
        {/* <Img fluid={data.weenie.childImageSharp.fluid} /> */}
      </Container>
    </Layout>

  )
}

export default JensJars