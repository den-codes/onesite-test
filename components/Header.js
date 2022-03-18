import React from 'react';
import styles from '../styles/Header.module.css';
import Nav from '../components/Nav';

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Brand Agency goes beyond the visual to deliver impactful and strategic solutions for future-proof brands.</p>
            <Nav />
        </div>
    )
}

export default Header;