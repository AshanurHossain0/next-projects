// "use client"
import React from 'react'
import styles from "./Login.module.css"
import Link from 'next/link'

function Login() {
  return (
    <div className={styles.login_container}>
      <img className={styles.image} src="girl.png" alt="girl_image" />
      <div className={styles.log_box}>
        <div className={`bg-slate-500 max-w-max max-h-max rounded-full p-2 md:my-20 sm:my-10`}><img className={styles.log_icon} src="lock.png" alt="" /></div>
        <form className={styles.form} action="">
          <input className={styles.input} type="text" placeholder='Enter Username or Email' />
          <input className={styles.input} type="password" placeholder='Enter Password' />
          <button className={`transition ease-in-out delay-75 hover:bg-[#222222] duration-700 `+ styles.button}>Login Now</button>
        </form>
        <p className='text-slate-500 xl:text-[17px] lg:text-[15px] md:text-[13px] sm:text-[11px]'>Don't have account? <Link className='text-blue-300 font-extralight' href='/register'>Go to Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login