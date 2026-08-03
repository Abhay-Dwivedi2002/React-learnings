import React, { useEffect, useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)

  useEffect(()=>{
    console.log("useEFffect is running");
    
  },[second])

  const changea= () =>{
    setfirst(first+1)  
  }

  const changeb= () =>{
    setsecond(second-1)  
  }



  return (
    <div>
      <h1>value is a: {first}</h1>
      <button onClick={changea}>Change a</button>

      <h1> value is b: {second}</h1>
      <button onClick={changeb}>Change b</button>
    </div>
  )
}

export default App
