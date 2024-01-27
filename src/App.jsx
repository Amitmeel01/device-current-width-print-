import { useEffect, useState } from "react";
import "./App.css"
export default function App(){
  const [width,setWidth]=useState(window.screen.width);

  const actualWidth=()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
      window.addEventListener("resize",actualWidth);
  //cleanup function
      return ()=>{
        window.removeEventListener("resize",actualWidth);
      }
  });
  return(
    <div className="width">
      <h1>My Pc actual width is : {width} </h1>
    </div>
  );
}