import React from 'react'
import useLatestBlogPost from '../hooks/use-latest-blog-post'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './services.module.css'

const LatestPosts = ({ title, introduction }) => {
  const latestBlogPost = useLatestBlogPost()

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        {title || introduction ? (
          <div>
            {title && <h1 className={styles.titulo}>{title}</h1>}
            {introduction && (
              <p className={styles.introduction}>{introduction}</p>
            )}
          </div>
        ) : null}

        <ul className={styles.articleList}>
          {latestBlogPost &&
            latestBlogPost.map((servicio) => {
              return (
                <li key={servicio.id} className={styles.servicioContainer}>
                  <GatsbyImage
                    className={styles.servicioImage}
                    alt=""
                    image={servicio.imagen.gatsbyImageData}
                  />
                  <h2> {servicio.title} </h2>
                  <div className={styles.overlay}>
                    <p className={styles.servicio__inner}>
                      {servicio.introduction}
                    </p>
                  </div>
                </li>
              )
            })}
        </ul>

        <div className="learn__more">
          {/* <Button text="Mas sobre Efata" as={Link} to="/acerca" /> */}
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
