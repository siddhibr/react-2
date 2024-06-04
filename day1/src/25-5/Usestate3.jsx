import { useState } from "react";

function UseState3(){
    const[counter,setCounter]=useState(1);
    console.log(counter)

    function increment(){
        setCounter((prevValue)=>prevValue+1)
    }

    function decrement(){
        if( counter>1){
            setCounter((prevValue)=>prevValue-1)

        }
        // setCounter((prevValue)=>prevValue-1)
    }

    function reset(){
        setCounter(1)
    }


    return (
    <div> 
        <h1>counter {counter}</h1>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>

    </div>)

}

export default UseState3;


