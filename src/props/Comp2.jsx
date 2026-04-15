import React from 'react'
import Comp3 from './Comp3'

const Comp2 = ({name, age}) => {
  return (
    <div>
      <Comp3 name={name} age={age} />
    </div>
  )
}

export default Comp2
