import { useEffect, useState } from 'react';
import Panel from '../components/Panel';
import styles from '../css/Panel.module.css';

const img_list = ['Milli.png','Murphy.png','radar.png','Riley.png']

function Home(){
    return(
        <div className={styles.panelLayer}>
            {img_list.map((name,index)=>
            <Panel 
                key = {index}
                id = {index}
                src = {name}
            />)}
        </div>
    )
}

export default Home;