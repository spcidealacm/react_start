import Counter from "./counter";
import CounterHook from "./countHook";
import React, { useState } from "react"

export const ThemeContext = React.createContext()

function App() {
  console.log('APP');
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ background: theme }}>
      <div>Class Counter:</div>
      <Counter myCount={2} />
      <div>Function Counter:</div>
      <CounterHook myCount={10} />
      <CounterHook myCount={-1000} />
      <br></br>
      <button onClick={() => setTheme(prevTheme => { return prevTheme === 'red' ? 'blue' : 'red' })}  >Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;