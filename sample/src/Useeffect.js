import React from 'react'
import {useState,useEffect} from 'react'

function Useeffect() {
    const [count,setcount]=useState(0)

    useEffect(()=>
    {
        console.log('mounting...')
    //work of state we use first console as here 1st click 
    console.log('updating'+count)

    return()=>{
        console.log('clean'+count);
        //end of working return console type here 2nd click hide 
    }
},[count])
//here count array useeffect take action

    






    return (
        <div>
            <h1 onClick={()=>setcount(count+1)}>i am here</h1>
            <p>counter:{count}</p>            
            
        </div>
    )
}

export default Useeffect
