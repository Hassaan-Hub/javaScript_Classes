import React, { useId, useRef, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)
  const nameId = useId()
  const passId = useId()
  const headingRef = useRef()
  const headingRef1 = useRef()

  return (
    <div>
      <h2 ref={headingRef1}>hello world</h2>
      <h1 ref={headingRef}>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1)
          console.log(headingRef.current)
          console.log(headingRef1.current)
        }}
      >
        increase
      </button>

      <button
        disabled={counter < 1}
        onClick={() => setCounter(counter - 1)}
      >
        decrease
      </button>


        <br />
        <br />
      <label id='nameId'>
        name
        <br />
        <input type="email" id="nameId" />
      </label>

        <br />
      <label id='passId'>
        password
        <br />
        <input type="password" id="passId" />
      </label>
    </div>
  )
}

export default App