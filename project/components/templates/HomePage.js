import React from 'react';
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import styles from './HomePage.module.css';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';

const HomePage = () => {
    return (
        <div className={styles.container}>
           <Banner/>
           <Attributes/> 
           <Definition/>
           <Companies/>
           <Instruction/>
        </div>
    );
};

export default HomePage;