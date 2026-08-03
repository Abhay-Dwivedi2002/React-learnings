import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState('')


  const submithandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", first);
    setfirst('')
  }





  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input onChange={(e)=>{
          setfirst(e.target.value);
        }} type="text" value={first} placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

// Two way form binding
