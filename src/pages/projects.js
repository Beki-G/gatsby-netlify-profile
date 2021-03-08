import * as React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectBlurb from '../components/ProjectBlurb'
import ProjectGrid from '../components/ProjectGrid'

const Project = ({ data, location }) => {
  

  return (
    <div className="bg-lgCyan">
      <SEO title="Projects" />
      <Navbar />
      <ProjectBlurb />
      <ProjectGrid />
      <Footer />
    </div>
  )
}

export default Project

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
