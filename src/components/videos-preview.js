import React from 'react'
/* import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image' */
import Video from './video'
import Container from './container'
import * as styles from './videos-preview.module.css'

const VideosPreview = ({ videos }) => {
  if (!videos) return null
  if (!Array.isArray(videos)) return null
  // console.log(videos)
  return (
    <Container>
      <ul className={styles.articleList}>
        {videos.map((video) => {
          return (
            <li key={video.id}>
              <Video
                videoSrcUrl={video.video.file.url}
                videoTitle={video.videoTitle}
              />

              <h2 className={styles.title}>{video.videoTitle}</h2>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default VideosPreview
