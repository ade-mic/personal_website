import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>
            <Image
              src="/logo.svg"
              alt="Ademola Aina Logo"
              width={40}
              height={40}
              priority
            />
            <span>Ademola Aina</span>
          </Link>
          <p className={styles.footerTagline}>
            Ever Learning. Ever Building. Ever Becoming.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerSection}>
            <h3>Navigate</h3>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/#blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <div className={styles.footerSection}>
            <h3>Research</h3>
            <Link href="/publications">Publications</Link>
            <a href="https://www.upm.edu.my/" target="_blank" rel="noopener noreferrer">
              Universiti Putra Malaysia
            </a>
          </div>

          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <a href="https://github.com/ade-mic" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ademola-micheal-aina" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <Link href="mailto:ademola.aina@outlook.com">Email</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>&copy; {currentYear} Ademola Aina. All rights reserved.</p>
      </div>
    </footer>
  );
}