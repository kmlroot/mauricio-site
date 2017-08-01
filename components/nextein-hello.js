
import React from 'react'

export default () => (
  <section style={styles.section}>
    <h1><span style={{ fontWeight: 200 }} >Hello, there. I'm </span>Mauricio Serna</h1>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/mauricioserna/static/perfil.jpg" alt="perfil"
      style={styles.img}/>
    </figure>
    <p> A Software Developer from <strong>Medellin, Colombia</strong></p>
  </section>
)

const styles = {
  section: {
    height: '100vh',
    color: '#000',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  img: {
    width: '200px',
    borderRadius: '50%'
  }
}
