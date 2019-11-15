import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"
import { rhythm, scale } from "../utils/typography"

class PostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const icons = data.site.siteMetadata.icons
    const { previous, next } = this.props.pageContext

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
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
              <div style={{ fontSize: 25, float: "right" }}>
                {tagView(post.frontmatter.tags)}
              </div>
            </small>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        description
      }
    }
  }
`
