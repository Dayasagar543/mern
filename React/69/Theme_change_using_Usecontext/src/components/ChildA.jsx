import React from 'react'
import ChildB from "../components/ChildB"
const ChildA = (Props) => {
  return (
    <div style={Props.style}>
     <ChildB/>
    </div>
  )
}

export default ChildA
