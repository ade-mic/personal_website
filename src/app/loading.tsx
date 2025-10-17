import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/logo.svg"
          alt="Loading..."
          width={100}
          height={100}
          className={styles.logo}
        />
        <h2 className={styles.text}>Loading...</h2>
      </div>
    </div>
  );
}
