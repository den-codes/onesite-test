import React from 'react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>Projects</li>
                <li>Info</li>
            </ul>
        </div>
    )
}

export default Nav;