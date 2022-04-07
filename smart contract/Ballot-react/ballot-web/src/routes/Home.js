import { useEffect, useState } from 'react';
import Panel from '../components/Panel';

const img_list = ['Milli.png','Murphy.png','radar.png','Riley.png']

function Home(){
    return(
        <div>
            {img_list.map((name)=>
            <Panel 
                src = {name}
            />)}
        </div>
    )
}

export default Home;