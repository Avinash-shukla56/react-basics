// HooksUseEffect For data fetching
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
      {image ?(
      <img src={image} alt="random" />
      ):(
        <p>loading ...</p>
      )}
      <br />
    
      <button onClick={data}>Change</button>
    </div>
  )
}

export default UseEffect1


  //  <div>
  
  //     {image ? (
  //       <img src="{image}" alt="Random" />
  //     ) : (
  //       <p>loading....</p>
  //     )}
  //     <br />
  //     <button onClick={data}>change</button>
  //   </div>
