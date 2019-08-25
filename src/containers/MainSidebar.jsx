import React from 'react';
import {Link} from 'react-router-dom';
import styles from './layoutStyles.module.scss'

const MainSidebar = () => (
  <div>
    <ul className={styles.nav}>
      <li className={styles.navTitle}>Title</li>
      <li className={styles.navItem}>
        <Link className={styles.navLink}>One</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink}>Two</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink}>Three</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink}>Four</Link>
      </li>
    </ul>
  </div>
);

export default MainSidebar;
