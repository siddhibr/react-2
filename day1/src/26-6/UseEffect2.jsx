
import { useEffect, useState } from "react";

function UseEffect2() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    alert("welcome");
  }, []);
  return (
    <div>
      <h1>UseEffect-2</h1>
      <h1>Welcome 
        - {counter}</h1>
      <button className="button"onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffect2;
