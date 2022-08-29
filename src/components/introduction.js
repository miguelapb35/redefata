import React from 'react'
import Logodomus from '../images/logos/logodomus.png'
import Container from './container'
import * as styles from './introduction.module.css'
import useVidSilvania from '../hooks/use-vid-silvania'
import useTextoIntroduccion from '../hooks/use-text-introduccion'
import localPoster from '../images/background/bg.jpg'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      width="540"
      height="260"
    ></iframe>
  </div>
)

const Introduction = () => {
  const vidSilvania = useVidSilvania()
  const vidSilvaniaObj = Object.assign({}, vidSilvania)
  const vidUrl = vidSilvaniaObj[0].video.file.url
  const introduccion = useTextoIntroduccion()
  const introduccionObj = Object.assign({}, introduccion)
  const introText = introduccionObj.contentfulIntroduccion.texto

  return (
    <Container className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <p>{introText}</p>
          {/*           <p>
            La Fundación Domus Colombia, ofrece el programa terapéutico EFATA,
            como una alternativa de tratamientos y rehabilitación de adicciones,
            con un modelo bio-psico-espiritual, ofreciendo su servicio con
            profesionalismo, ética y compromiso al servicio de la vida.
          </p> */}
          <p>
            <a
              href="https://www.domuscolombia.org/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkdomus}
            >
              Fundación Domus Colombia
              <img
                src={Logodomus}
                alt="Logodomus"
                className={styles.logodomus}
              />
            </a>
          </p>
        </div>
        <div className={styles.column}>
          <div className={styles.video}>
            <Video
              //videoSrcURL={vidUrl}
              videoSrcURL="https://player.vimeo.com/video/727443407?h=da1eaa58fe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              videoTitle="Efata Sede Silvania"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Introduction
