import React from 'react'

import * as styles from './formulario.module.css'

const Formulario = () => (
  <div>
    <p>Quieres que te llamemos ?</p>
    <form name="contact" netlify data-netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input type="text" name="nombre" placeholder="Nombre" />
      </p>
      <p>
        <input type="number" name="celular" placeholder="Celular" />
      </p>
      <p>
        <button type="submit" className={styles.enviar}>
          Enviar
        </button>
      </p>
    </form>
  </div>
)

export default Formulario
