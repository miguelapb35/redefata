import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Formulario from '../components/formulario'
import * as styles from '../components/contacto.module.css'

class Contacto extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Contacto" />
        <Hero title="Contacto" image={author.heroImage.gatsbyImageData} />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p>Celular</p>
              <p>323 5778680</p>
              <p>Email</p>
              <p>domusefata@gmail.com</p>
              <p>Dirección</p>
              <p>Finca San Jeronimo, Vereda Santa Rita Baja</p>
              <p>Silvania, Cundinamarca</p>
            </div>

            <div className={styles.column}>
              <Formulario />
              {/*               <p>Quieres que te llamemos ?</p>
              <form
                action="https://getform.io/f/707d3d5f-e394-4a94-990c-a6d5c8d20133"
                method="POST"
              >
                <p>
                  <input type="text" name="nombre" placeholder="Nombre" />
                </p>
                <p>
                  <input type="number" name="celular" placeholder="Celular" />
                </p>
                <p>
                  <button type="submit" className={styles.enviar}>
                    Enviar
                  </button>
                </p>
              </form> */}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contacto

export const pageQuery = graphql`
  query ContactoQuery {
    allContentfulPerson(
      filter: { contentful_id: { eq: "7pefL2n7z2viFSfRfm8U3j" } }
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
