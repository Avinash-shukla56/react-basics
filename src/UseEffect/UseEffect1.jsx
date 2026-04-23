// Hooks UseEffect and data fetching
import React, { use, useEffect, useState } from 'react'

const UseEffect1 = () => {
  const [image, setImage] = useState()

  async function data() {
    try {
      const data = await fetch("https://picsum.photos/200")
      console.log(data);
      setImage(data.url)

    } catch (error) {
      console.log("Error message : ", error);
    }
  }

  useEffect(() => {
    data()
  }, [])
  return (
    <div>
      <img src={image} alt="" /><br />
      <button onClick={data}>Change</button>
    </div>
  )
}

export default UseEffect1
