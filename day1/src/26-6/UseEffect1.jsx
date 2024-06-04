
import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  // state
  // fuctions
  // effects
  useEffect(() => {
    alert("Inside useeffect.");
    //  backend call to fetch product
  });

    // window.onload = userStartedBrowsing();
  return (
    <div><h2 className="f-1">UseEffect - 1</h2>
      <button className="button" onClick={() => setCounter(counter + 1)}>+</button>
      <button className="button1" onClick={() => setCounter2(counter2 + 1)}>+ 2</button>
    
    </div>
  );
}

export default UseEffect;
