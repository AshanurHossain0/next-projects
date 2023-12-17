'use client'
import React from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
        <h3 className={styles.logo}>Strong Bond</h3>
        <div className={styles.links}>
            <Link className='transition ease-in-out delay-75 rounded-md md:px-4 sm:px-2 py-2 hover:bg-[#222222] duration-700' href="/">Home</Link>
            {localStorage.getItem("token") && <Link className='transition ease-in-out delay-75 rounded-md md:px-4 sm:px-2 py-2 hover:bg-[#222222] duration-700' href="/">Profile</Link>}
            {!localStorage.getItem("token") && <Link className='transition ease-in-out delay-75 rounded-md md:px-4 sm:px-2 py-2 hover:bg-[#222222] duration-700' href="/login">SignUp/Login</Link>}
        </div>
    </div>
  )
}

export default Navbar