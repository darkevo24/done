import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [message,setMessage] = useState("");
  const [data,setData] = useState("");
  const [data2,setData2] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  axios.get("https://fakestoreapi.com/users").then(function(data){
    console.log(data.data);
    setData(data.data);
  });
  var turn,result;
  turn = false;
  return (
    <div className="App">
        <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onChange={function(e){
        setEmail(e.target.value);
      }} type="text" class="form-control" id="staticEmail" ></input>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input onChange={function(e){
        setPassword(e.target.value);
      }} type="password" class="form-control" id="inputPassword"></input>
    </div>
  </div>
  <p>{message}</p>
  <button onClick={function(){
    data.map(function(data){
      if (data.email.toLowerCase() == email.toLowerCase() && data.password.toLowerCase() == password.toLowerCase()){
        turn = true;
      }
    });
    if (turn== true){
      setMessage("login sukses");
    }
    else {
      setMessage("login gagal karena salah password atau username");
    }
  }} type="button" class="btn btn-primary">Submit</button>
  <br></br>
  <button onClick={function(){
    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify(
          {
              email:'John@gmail.com',
              username:'johnd',
              password:'m38rmF$',
              name:{
                  firstname:'John',
                  lastname:'Doe'
              },
              address:{
                  city:'kilcoole',
                  street:'7835 new road',
                  number:3,
                  zipcode:'12926-3874',
                  geolocation:{
                      lat:'-37.3159',
                      long:'81.1496'
                  }
              },
              phone:'1-570-236-7033'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
  }} class="btn btn-primary">Insert</button>
  <br></br>
  <button onClick={function(){
    fetch('https://fakestoreapi.com/users/7',{
      method:"PUT",
      body:JSON.stringify(
          {
          email:'John@gmail.com',
          username:'johnd',
          password:'m38rmF$',
          name:{
              firstname:'John',
              lastname:'Doe'
          },
          address:{
              city:'kilcoole',
              street:'7835 new road',
              number:3,
              zipcode:'12926-3874',
              geolocation:{
                  lat:'-37.3159',
                  long:'81.1496'
              }
          },
          phone:'1-570-236-7033'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
  }} class="btn btn-primary">Update</button>
  <br></br>
  <button onClick={function(){
    fetch('https://fakestoreapi.com/users/6',{
      method:"DELETE"
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
  }} class="btn btn-primary">Delete</button>
    </div>
  );
}

export default App;
