import React from 'react'

import * as styles from './formulario.module.css'

const Formulario = () => (
  <div>
    <p>Quieres que te llamemos ?</p>
    <form
      action="https://getform.io/f/707d3d5f-e394-4a94-990c-a6d5c8d20133"
      method="POST"
    >
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
