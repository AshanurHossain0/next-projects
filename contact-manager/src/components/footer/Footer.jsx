import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer_container}>
        <p className="copyright">{`copyright@${new Date().getFullYear()}`}</p>
    </div>
  )
}

export default Footer