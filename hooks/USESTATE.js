import React, { useState } from 'react';

export default function USESTATE() {
    const[count,setCount]=useState(0);
    const[names,setNames]=useState([]);
    const[name,setName]=useState("");
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count==0)
        {
            setCount(0) 
        }
        else{
            setCount(count-1) 
        }
    }
    function sub(e){
        e.preventDefault();
        setNames([...names,name])
        setName("")
    }
    function handle(e){
        setName(e.target.value)
    }
  return(
      <div>
       <button onClick={increment}>inc</button>
       <p>{count}</p>
       <button onClick={decrement}>dec</button>
       <hr/>
       <form onSubmit={sub}>
        <input type="text" value={name} onChange={handle} placeholder='add names'/>
        <button type="submit">submit</button>
       </form>
       <hr/>
       <ul>
       {names.map((item)=>(
           <li key={item.id}>{item}{item.id}</li>
       ))}
       {names}
       </ul>
  </div>
       )
}
