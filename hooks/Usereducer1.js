import React, { useReducer } from 'react';

const initialState={
    firstCount:0,
    secondCount:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {...state,firstCount:state.firstCount+1}
        case 'decrement':
            return  {...state,firstCount:state.firstCount-1}  
        case 'increment2':
            return {...state,secondCount:state.secondCount+1}
        case 'decrement2':
            return  {...state,secondCount:state.secondCount-1}   
         case 'reset':
             return initialState
        default:
            return state
    }

}
export default function Usereducer1() {
    const[count,dispatch]=useReducer(reducer,initialState)
  return <div>
      <div>firstcount-{count.firstCount}</div>
      <div>secondcount-{count.secondCount}</div>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
      <div>
      <button onClick={()=>dispatch({type:"increment2"})}>increment2</button>
      <button onClick={()=>dispatch({type:'decrement2'})}>decrement2</button>
      </div>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
  </div>;
}