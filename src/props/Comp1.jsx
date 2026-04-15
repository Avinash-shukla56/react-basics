import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({name, age}) => {
  return (
    <div>
      <Comp2 name={name} age={age} />
    </div>
  )
}

export default Comp1
