import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import FotosPreview from '../components/fotos-preview'

class MomentosIndex extends React.Component {
  render() {
    const fotos = get(this, 'props.data.allContentfulMomentos.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Momentos Efata" />
        <Hero title="Momentos Efata" image={author.heroImage.gatsbyImageData} />
        <FotosPreview fotos={fotos} />
      </Layout>
    )
  }
}

export default MomentosIndex

export const pageQuery = graphql`
  query MomentosQuery {
    allContentfulMomentos {
      nodes {
        id
        title
        foto {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }

    allContentfulPerson(
      filter: { contentful_id: { eq: "1QuwzGjgKoiKs43Qq6qW0d" } }
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
