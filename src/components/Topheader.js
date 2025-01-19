import { useState } from 'react';
import styles from '@/styles/Topheader.module.css';

const Banner = ({ onClose }) => {
  return (
    <div className={styles.ribbonContainer}>
      <div className={styles.ribbonInnerContent}>
        <marquee direction="left" scrollAmount="12" width="100%">
          <a href="http://localhost:3000/" className={styles.ribbonLink}>
            ✨ Celebrate New Beginnings with <b>upto 15% off</b> on Wedding purchases ✨ <u>Shop now</u>
          </a>
          <span className={styles.ribbonInnerTag}>T&amp;C apply.</span>
        </marquee>
        <div className={styles.bannerCloseButton} onClick={onClose}>
          ✖
        </div>
      </div>
    </div>
  );
};

export default Banner;
