import "./index.css";
import {useState} from "react"

const Counter = () => {
  /* let value = 0; */

  const [value, setValue] = useState(0)

  const onIncrement = () => {
      console.log("value corrisponde a :", value);
    setValue((prev)=>prev+=1)
    /* value = value + 1; */
  };

  const onDecrement = () => {
      console.log("value corrisponde a :", value);
    setValue(value-1)
   /*  value--; */
  };

  return (
    <div className="Counter">
      <button onClick={onDecrement}>-</button>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
