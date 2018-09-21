import React from 'react'

export default () => (
  <section style={styles.section}>
    <h1><span style={{ fontWeight: 200 }} >Hello, there. I'm </span>Mauricio Serna Florez</h1>
    <figure>
      <img src="https://s3-us-west-2.amazonaws.com/mauricioserna/perfil.jpeg" style={styles.img} />
    </figure>
    <p> A Software Engineer at <strong>Bancolombia Innovation Area 🇨🇴</strong> </p>
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
