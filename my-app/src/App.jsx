import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* changed this to my own h1*/}
      <div>
        <h1>dashboard</h1>
        <p>counter</p>
      </div>

{/* coppied this button and made it so one subtracts */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
           +
        </button>
      </div>

      <div className="card2">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>

{/* this here is where the number will be shown */}
      <div className="card3">
        {count}
      </div>
    </>
  )
}

export default App
