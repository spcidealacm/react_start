import { useState, useContext } from "react"
import { ThemeContext } from "./App"

export default function CounterHook({ myCount }) {

  const [count, setCount] = useState(myCount)

  const style = useContext(ThemeContext)
  console.log("FUNCTION COMPONENT");
  return (
    <>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCount => prevCount + 1)} > +</button>
    </>
  )
}