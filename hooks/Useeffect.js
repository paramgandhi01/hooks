import React,{useState,useEffect} from 'react';


export default function Useeffect() {
    const[name,setName]=useState("")
    //on every render
    useEffect(()=>{
        console.log("re-render!");
    })

    //on first render only-componentDidMount alternative
    useEffect(()=>{
        console.log("only on first render!");
    },[])

    //on first render+when dependencies change-componentDidUpdate alternative
     useEffect(()=>{
        console.log(`name changed to ${name}!`);
    },[name])

  return <div>
      <h3>the useefffect hook</h3>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>;
}
