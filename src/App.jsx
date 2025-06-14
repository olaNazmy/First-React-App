import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // state in top level
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  // function to get data
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  },[]);

  return (
    <>
      <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get advice</button>
        <Message count = {count} />
      </div>
    </>
  );
}


function Message(props)
{
  return(
<p>
          you have read <strong>{props.count}</strong> pieces of advice
        </p>
  );
}