import React, { useRef, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(second)
  const headingRef = useRef()
  
  return (
    <div>
      <h1 ref={headingRef}></h1>
    </div>
  )
}

export default App