import {  useState } from 'react';
import './App.css'

export default function App() 
{
  // state in top level
  const[advice, setAdvice] = useState("");
  // function to get data
  async function getAdvice()
  {
    const res  = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }


  return (
    <>
    <div><h1>hello i am ola</h1>
    <h2>{advice}</h2>
    <button onClick={getAdvice}>Get advice</button>

    </div>
    </>
  )
}

