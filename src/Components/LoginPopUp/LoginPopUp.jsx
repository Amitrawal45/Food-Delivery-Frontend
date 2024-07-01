import React, {  useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";
import axios from "axios"

const LoginPopUp = ({ setShowLogin }) => {
  const {url,token,setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData)=>{
      return {...prevData,[name]:value}
    })
  }

  const onLogin = async(event)=>{
    event.preventDefault();
    let newUrl =url;
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }

    else{
      newUrl += "/api/user/register"
    }

    const response =await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);

    }
    else{
      alert(response.data.message)
    }

  }




  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name}  type="text" placeholder="Your Name" required />
          )}

          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Your Password" required />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, iagree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account ? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an Account ? <span onClick={()=>setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;