import React, { useCallback } from 'react';
import { useState,useMemo
 } from 'react/cjs/react.development';
 import Title from "./Title"
 import Count from "./Count"
 import Button from "./Button"

export default function Usememo() {
    const[age,setAge]=useState(0)
    const[salary,setSalary]=useState(2500000)
    const incs=useCallback(()=>{
      setSalary(salary+1000)
    }) 
    
    const inca=useCallback(()=>{
      setAge(age+1)
    }) 
    

  return(
      <>
    <Title/>
    <Count text="age" count={age}/>
    <Button handle={inca} inc="increment age"/>
    <Count text="salary" count={salary}/>
    <Button handle={incs} inc="increment salary"/>
      </>
  )
  
}