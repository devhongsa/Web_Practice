//useEffect, cleanup practice

import { useEffect, useState } from "react";
import Button from "./components/Button";

function Hello(){

    function byeFn(){
        console.log("Bye");
    }

    function hiFn(){
        console.log("Hi");
        return byeFn;
    }

    useEffect(hiFn,[]);

    useEffect(()=>{
        console.log("Hi");
        return ()=>console.log("Bye");
    },[]);



    return <h1>Hello!</h1>;
}


function App(){
    const [showing, setShowing] = useState(false);

    const onClick = ()=>{
        setShowing((prev)=>!prev);
    }

    return(
        <div>
            {showing ? <Hello /> : null}
            <Button 
                text={showing ? "Hide":"Show"}
                onClick= {onClick} />
        </div>
    )

}

export default App;