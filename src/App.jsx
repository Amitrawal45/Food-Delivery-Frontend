import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Verify from "./Pages/Verify/Verify";
import MyOrder from "./Pages/MyOrders/MyOrder";

function App() {

  const [showLogin ,setShowLogin] = useState(false);
 return <>

 {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

 <div className="app">
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/order" element={<PlaceOrder/>} />
     <Route path="/verify"element={<Verify/>} />
     <Route path="/myorders" element={<MyOrder/>} />
    </Routes>

  </div>;

  <Footer/>

  </>
  
}
export default App;
