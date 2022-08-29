import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Introduction from '../components/introduction'
import Gallery from '../components/gallery'
import LatestPosts from '../components/services'
import LatestNoticias from '../components/noticias'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio}
        />
        <Introduction />
        <LatestPosts
          title="Servicios"
          introduction="Estos son algunos de los servicios que ofrecemos"
        />
        <ArticlePreview posts={posts} />
        <LatestNoticias title="Noticias Efata" />
        <Gallery />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")

        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1600
          )
        }
      }
    }
  }
`
