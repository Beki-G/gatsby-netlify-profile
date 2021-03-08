import * as React from "react"
import { graphql } from "gatsby"
import CardGrid from "../components/CardGrid.js"
import Footer from "../components/Footer.js"
import Hero from "../components/Hero/Hero.js"
import Profile from "../components/Profile.js"

import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {

  return (
    <div className="bg-lgCyan">
      <SEO title="Profile" />
      <Hero />
      <Profile />
      <CardGrid />
      <Footer />

    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
