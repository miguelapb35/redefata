import React from 'react'
import useLatestNoticia from '../hooks/use-latest-noticia'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './noticia-preview.module.css'
import Container from './container'

const LatestNoticias = ({ title }) => {
  const latestNoticia = useLatestNoticia()

  return (
    <Container>
      <h1 className={styles.titulo}>{title}</h1>
      <ul className={styles.articleList}>
        {latestNoticia &&
          latestNoticia.map((noticia) => {
            return (
              <li key={noticia.id}>
                <div className={styles.noticiaswrapper}>
                  <div className={styles.foto}>
                    <GatsbyImage
                      alt="noticia"
                      image={noticia.foto.gatsbyImageData}
                    />
                  </div>

                  <h2 className={styles.title}> {noticia.title} </h2>
                  <p>{noticia.descripcion}</p>
                </div>
              </li>
            )
          })}
      </ul>
    </Container>
  )
}

export default LatestNoticias
