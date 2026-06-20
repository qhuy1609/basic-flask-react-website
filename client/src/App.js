import React, { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(null)

  const fetchNumber = () => {
    fetch('http://localhost:5000/random')
      .then(res => res.json())
      .then(data => setNumber(data.number))
  }

  return (
    <div>
      <h1 className="title">Random Number: {number}</h1>
      <button className="btn" onClick={fetchNumber}>
        Generate Number
      </button>
    </div>
  )
}

export default App