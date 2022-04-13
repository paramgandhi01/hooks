import React, { useRef, useState,useEffect } from 'react';

export default function Useref() {
    const[name,setName]=useState("");
    const[count,setCount]=useState(0);
    const inp=useRef("");
    const count1=useRef("");
    const handle=()=>{
        setName("");
        inp.current.focus();
    }
    const inc=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        count1.current=count
    },[count])
  return <div>
      <input ref={inp} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handle}>click</button>
      <p>my name is {name}</p>
      <hr/>
      counter:{count}<br/>
      previouscount:{count1.current}<br/>
      <button onClick={inc}>inc</button>
  </div>;
}
