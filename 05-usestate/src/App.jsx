import React, { useState } from "react";


const App = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState({name:'Abhay', age:18})
  const [batch, newbatch] = useState({name:'Akshat', age:24})
  const [first, setfirst] = useState(0);



  function increment (){
    setNum(num+1)
  }

  const decrement= ()=> {
    setNum(num-1)
  }

  const updateUser = ()=>{
    const newUser = {...user};
    newUser.name= "Anurag";
    setUser(newUser);

  }

  const batchUpdate = ()=> {
     newbatch(prev=>({...batch,age:30})) 
     newbatch(prev=>({...batch,name:"Akshay"})) 
  }

  const multiUpdate = () =>{
    setfirst(prev=>(prev+1));
    setfirst(prev=>(prev+1));
    setfirst(prev=>(prev+1));
    setfirst(prev=>(prev+1));
  }


  return (
    <div className="hero">
      <h1>Number is: {num}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>Get User info : {user.name} is {user.age} year old</h1>
      <button onClick={updateUser}>Update Userinfo</button>

      <h1>Batch Update example: {batch.name} is updated with batch update</h1>
      <button onClick={batchUpdate}>Update in Batch</button>


      <h1>Batch Update example: {first} is updated with batch update</h1>
      <button onClick={multiUpdate}>Update in Batch</button>



    </div>


      
  );
};

export default App;
