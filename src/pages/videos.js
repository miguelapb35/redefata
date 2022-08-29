import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import VideosPreview from '../components/videos-preview'

//import * as styles from '../components/article-preview.module.css'

class VideosIndex extends React.Component {
  render() {
    const videos = get(this, 'props.data.allContentfulVideo.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Videos" />
        <Hero title="Videos" image={author.heroImage.gatsbyImageData} />
        <VideosPreview videos={videos} />
      </Layout>
    )
  }
}

export default VideosIndex

export const pageQuery = graphql`
  query VideosQuery {
    allContentfulVideo {
      totalCount
      nodes {
        video {
          file {
            url
          }
        }
        videoTitle
        id
      }
    }

    allContentfulPerson(
      filter: { contentful_id: { eq: "5CBaRWFDeEx0N9F1R4Dmig" } }
    ) {
      nodes {
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
