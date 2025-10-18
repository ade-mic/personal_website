import React from 'react';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  );
}