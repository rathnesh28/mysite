import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children, meta }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{meta?.title || 'MyShop'}</title>
        <meta name="description" content={meta?.description || 'Your one-stop e-commerce shop'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
