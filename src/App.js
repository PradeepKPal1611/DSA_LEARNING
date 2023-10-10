import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
function saveUser(){
  console.log(name,email,mobile);
  let Arr = {name, email, mobile}
  fetch("http://localhost:4000/todo",{
    method: 'POST', 
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(Arr)
  }).then((result)=>{
    //console.log("result");
    result.json().then((resp)=>{
     console.lpg("resp",resp); 
    })
  })
}
  return (
    <div className="App">
      <h1>POST API EXAMPLE</h1>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value
        )}} name='name'/><br/> <br/>
      <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value
        )}} name='email'/><br/> <br/>
      <input type='text' value={mobile} onChange={(e)=>{setMobile(e.target.value
        )}} name='mobile'/><br/> <br/>
      <button type='button'>Save New User</button>
    </div>
  );
}

export default App;
