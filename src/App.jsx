import {  useState } from 'react';
import './App.css'

export default function App() 
{
  // state in top level
  const[advice, setAdvice] = useState("");
  const[count,setCount] = useState(0);
  // function to get data
  async function getAdvice()
  {
    const res  = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1);
  }


  return (
    <>
    <div> 
    <h2>{advice}</h2>
    <button onClick={getAdvice}>Get advice</button>
    <p>you have read <strong>{count}</strong> pieces of advice</p>

    </div>
    </>
  )
}

