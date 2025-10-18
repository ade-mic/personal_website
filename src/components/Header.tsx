'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.svg"
            alt="Ademola Aina Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <p className={styles.logoTagline}>Ademola Aina</p>
          </div>
        </Link>
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/projects" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="/publications" onClick={() => setIsMenuOpen(false)}>Publications</Link></li>
          <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li><Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}