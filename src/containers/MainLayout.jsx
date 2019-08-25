import React from 'react';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import MainFooter from './MainFooter';
import styles from './layoutStyles.module.scss';

const MainLayout = () => (
  <div className={styles.mainLayout}>
    <header className={`${styles.appHeader} ${styles.navbar}`}>
      <MainHeader />
    </header>
    <div className={styles.mainBody}>
      <div className={styles.sideBar}>
        <MainSidebar />
      </div>
      <main className={styles.content}>
        Main Content
      </main>
    </div>
    <footer className={styles.footer}>
      <MainFooter />
    </footer>
  </div>
);

export default MainLayout;