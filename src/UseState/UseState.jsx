import React, { use, useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    user: "Rohit",
    age: 21
  })

  const Incre = () => setCount(count + 1)
  const Decre = () => setCount(count - 1)

  const updateUser = () => {
    setUser({
      ...user, age: 23
    })
  }
  return (
    <div>
        {/* <h1>Count : {count}</h1>
        <button className='btn btn-warning' onClick={Incre}>Increment</button>
        <button className='btn btn-danger' onClick={Decre} disabled={count == 0}>Decrement</button> */}

        <h1>Name : {user.user}</h1>
        <h1>Age : {user.age}</h1>
        <button onClick={updateUser} className='btn btn-primary'>Update</button>
    </div>
  )
}

export default UseState
