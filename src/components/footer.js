import React from 'react'
import Container from './container'
import Efata from '../images/logos/logo-efata.png'
import Redes from './redes-sociales'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.midcolumn}>
          <img src={Efata} alt="Logo Efata" className={styles.icon} />
        </div>
        <p>
          Efata es un programa de <br />
          <a
            href="https://www.domuscolombia.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Fundación Domus Colombia
          </a>
        </p>
      </div>
      <div className={styles.column}>
        <p>Red Terapéutica Efata</p>

        <p>Finca San Jeronimo, Vereda Santa Rita Baja</p>
        <p>Silvania, Cundinamarca</p>

        <p>Celular</p>
        <p>323 5778680</p>
      </div>
      <div className={styles.column}>
        <div className={styles.innercolumn}>
          <Redes />
        </div>
      </div>
    </div>
  </Container>
)

export default Footer
