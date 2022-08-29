import React from 'react'
import * as styles from './video.module.css'

const Video = ({ videoSrcUrl, videoTitle, ...props }) => (
  <div className={styles.videowrapper}>
    <iframe
      src={videoSrcUrl}
      title={videoTitle}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      className={styles.iframewrapper}
    />
  </div>
)
export default Video
