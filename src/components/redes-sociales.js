import React from 'react'
import Container from './container'
import * as styles from './redes.module.css'
import Instagram from '../images/logos/instagram.png'
import Facebook from '../images/logos/facebook.png'

const Redes = () => (
  <Container>
    <div className={styles.container}>
      <div className={styles.item}>
        <a
          href="https://www.facebook.com/profile.php?id=100084731586274"
          target="_blank"
        >
          <img src={Facebook} alt="Facebook" className={styles.icon} />
        </a>
      </div>
      <div className={styles.item}>
        <a href="https://www.instagram.com/domusefata/" target="_blank">
          <img src={Instagram} alt="Instagram" className={styles.icon} />
        </a>
      </div>
      <div className={styles.item}>
        <p>domusefata@gmail.com</p>
      </div>
    </div>
  </Container>
)

export default Redes
