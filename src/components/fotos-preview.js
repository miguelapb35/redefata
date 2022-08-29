import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-preview.module.css'

const FotosPreview = ({ fotos }) => {
  if (!fotos) return null
  if (!Array.isArray(fotos)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {fotos.map((foto) => {
          return (
            <li key={foto.title}>
              {/* <Link to={`/blog/${foto.title}`} className={styles.link}></Link> */}
              <GatsbyImage alt="" image={foto.foto.gatsbyImageData} />
              <h2 className={styles.title}>{foto.title}</h2>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default FotosPreview
