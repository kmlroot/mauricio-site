import React from 'react'

export default ({ style }) => {
  return (
    <nav style={{...styles.nav, ...style}}>
      <a style={styles.item} href="/">Home</a>
      <a style={styles.item} href="https://github.com/fmauricios" target="_blank">Work</a>
      <a style={styles.item} href="/posts">Posts</a>
      <a style={styles.item} href="https://s3-us-west-2.amazonaws.com/mauricioserna/static/documents/cv.pdf" target="_blank">Curriculum Vitae</a>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    flexWrap: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    textAlign: 'center',  
  },
  item: {
    padding: 5,
    textDecoration: 'none',
    color: 'black',
    cursor: 'auto',
    padding: '.25em .5em',
  }
}