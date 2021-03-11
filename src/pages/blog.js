import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <div>
        <Navbar />
        <Layout location={location} title={siteTitle}>
          <SEO title="All posts" />
          <div className="w-5/6 mx-auto bg-eagleGreen rounded-md p-3 ring-4 ring-aquamarine">
            <p className="mb-6 text-center">
              No blog posts found. Come back soon!.
            </p>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <div className="bg-lgCyan min-h-87/100">
        <Navbar />
        <Layout location={location} title={siteTitle}>
          <SEO title="All posts" />
          <div className="md:w-11/12 mx-auto">
            <ol style={{ listStyle: `none` }} className="">
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li
                    key={post.fields.slug}
                    className="bg-white text-black rounded-md p-4 mb-4"
                  >
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2>
                          <Link to={post.fields.slug} itemProp="url">
                            <span
                              itemProp="headline"
                              className="text-lg font-medium"
                            >
                              {title}
                            </span>
                          </Link>{" "}
                          &#8226;{" "}
                          <small className="text-sm text-center text-gray-600">
                            {post.frontmatter.date}
                          </small>
                        </h2>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>
        </Layout>
      </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
