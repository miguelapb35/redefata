import React from 'react'
import WhatsApp from '../images/logos/whatsapp.png'
import * as styles from './whatsappCall.module.css'

const WhatsappCall = () => {
  return (
    <div>
      <a
        title="mobil"
        href={`https://api.whatsapp.com/send?phone=57323 5778680&text=Hola, estoy mirando la página de la fundación y quisiera...`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">
          <img src={WhatsApp} alt="WhatsApp" className={styles.icon} />
        </div>
      </a>
    </div>
  )
}

export default WhatsappCall
