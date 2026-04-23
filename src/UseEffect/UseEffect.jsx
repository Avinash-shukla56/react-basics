import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  const Incre = () => setCount(count + 1)
  const Decre = () => setCount(count - 1)

  // Without dependency 
  useEffect(() => {
    console.log("Component is rendered");
  })

  // With empty dependency 
  useEffect(() => {
    console.log("Browser loaded");
  }, [])
  
  // With dependency
  useEffect(() => {
    console.log("Count is rendered");
  }, [count]) 
  return (
    <div>
        <h1>Count : {count}</h1>
        <button className='btn btn-warning' onClick={Incre}>Increment</button>
        <button className='btn btn-danger' onClick={Decre} disabled={count == 0}>Decrement</button>
    </div>
  )
}

export default UseEffect
