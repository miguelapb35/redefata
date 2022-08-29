import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.header}>
          <h1 className={styles.titulo}>Momentos Efata</h1>
          <h3 className={styles.subtitulo}>
            Aquí puedes encontrar el espacio que necesitas
          </h3>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <StaticImage src="../images/momentos/img1.jpeg" alt="img 1" />
            <StaticImage src="../images/momentos/img5.jpeg" alt="img 5" />
            <StaticImage src="../images/momentos/img12.jpeg" alt="img 12" />
          </div>

          <div className={styles.column}>
            <StaticImage src="../images/momentos/img2.jpeg" alt="img 2" />
            <StaticImage src="../images/momentos/img6.jpeg" alt="img 6" />
            <StaticImage src="../images/momentos/img9.jpeg" alt="img 9" />
            <StaticImage src="../images/momentos/img14.jpeg" alt="img 14" />
          </div>

          <div className={styles.column}>
            <StaticImage src="../images/momentos/img3.jpeg" alt="img 3" />
            <StaticImage src="../images/momentos/img7.jpeg" alt="img 7" />
            <StaticImage src="../images/momentos/img13.jpeg" alt="img 13" />
          </div>

          <div className={styles.column}>
            <StaticImage src="../images/momentos/img4.jpeg" alt="img 4" />
            <StaticImage src="../images/momentos/img8.jpeg" alt="img 8" />
            <StaticImage src="../images/momentos/img10.jpeg" alt="img 10" />
            <StaticImage src="../images/momentos/img15.jpeg" alt="img 15" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
