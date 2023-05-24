'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { BsGithub } from 'react-icons/bs'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>
            ig<span className={styles.logoDot}>.</span>news
          </h1>

          <div className={styles['nav-links']}>
            <Link href="/" className={styles['nav-link']}>
              Home
            </Link>
            <Link href="/" className={styles['nav-link']}>
              Posts
            </Link>
          </div>
        </nav>

        <button type="button" className={styles.button}>
          <BsGithub className={styles['button-icon']} />
          Sign in with GitHub
        </button>
      </div>
    </header>
  )
}
