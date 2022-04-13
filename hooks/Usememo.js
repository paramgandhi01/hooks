import React from 'react';
import { useState,useMemo
 } from 'react/cjs/react.development';
import Useeffect from './Useeffect';

export default function Usememo() {
    const[count,setCount]=useState(0)
    const result=useMemo(()=>{
        return factorial(count)
    },[count])
    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        if(count==0)
        {
            setCount(0) 
        }
        else{
            setCount(count-1) 
        }
    }
    function factorial(e){
        if(e==0)
        {
            return 1
        }
        else{
            let a=1;
            while(e>=1)
            
            {           
                    a=a*e;
                    e--;         
            }
            return a     
        }
    }
  return <div>
      factorial of {count} is:{result}
<button onClick={inc}>inc</button>
<button onClick={dec}>dec</button>
  </div>;
}
