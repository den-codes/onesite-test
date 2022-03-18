import React from 'react';
import Image from "next/image"

import styles from '../styles/Hero.module.css';
import Logo from '../public/assets/Logo.png';

const Hero = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src={Logo}/>
        </div>
    )
}

export default Hero;