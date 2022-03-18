import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <span>Instagram @brnd-design</span>
            <ul className={styles.list}>
                <li>English +1 424 527 3000</li>
                <li>Spanish +5491158744898</li>
            </ul>
            <span>Info @brnd.design</span>
            <span>Buenos Aires, Argentina</span>
            <span>&copy; 2022. All Rights Reserved.</span>

        </div>
    )
}

export default Footer;