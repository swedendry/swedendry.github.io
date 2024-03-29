import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const icons = data.site.siteMetadata.icons
    const posts = data.allMarkdownRemark.edges

    const getAllTags = () => {
      const tags = []
      posts.map(({ node }) => node.frontmatter.tags.map(tag => tags.push(tag)))

      return _.uniq(tags)
    }

    const tagView = tags => {
      const views = []
      tags.forEach((tag, i) => {
        icons.forEach(icon => {
          if (tag === icon.tag)
            views.push(
              <Tag
                key={i}
                tag={icon.tag}
                path={icon.path}
                name={icon.name}
                color={icon.color}
              />
            )
        })
      })

      return views
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ fontSize: 40, backgroundColor: "white" }}>
          {tagView(getAllTags())}
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>
                  {node.frontmatter.date}
                  <div style={{ fontSize: 25, float: "right" }}>
                    {tagView(tags)}
                  </div>
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        icons {
          tag
          path
          name
          color
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
            description
          }
        }
      }
    }
  }
`
