//useEffect practice

import Button from "./components/Button";
import styles from "./css/App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("");
  const onClick = ()=>setValue((prev)=>prev +1);

  console.log("i run all the time");
  
  useEffect(()=>{
    console.log("Call the api...");
  }, []);
  //처음에만 실행되고, 그 후로 실행안됨.

  useEffect(()=>{
    console.log("when counter changes")
  },[counter])

  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
      console.log("Search for", keyword);
    }
  }, [keyword])
//keyword값이 변하면 실행됨.

  useEffect(()=>{
    console.log("when keyword or counter changes")
  },[keyword, counter])
// keyword나 counter 둘중에 하나가 바뀌면 실행됨


  const onChange = (event) =>{
    setKeyword(event.target.value);
  }

  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange}
        type="text"
        placeholder="search here..." />
      <h1 className={styles.title}>Hello! counter : {counter}</h1>
      <Button text="btn" />
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
