import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.hamrochulo} className="footer-logo" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magnam tenetur consequuntur reiciendis corrupti est sit aut
            exercitationem itaque, quam mollitia deleniti fuga necessitatibus
            accusamus dolorem quaerat? Possimus, velit officia.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+917058467235</li>
                <li>contact@hamrochulo.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; HamroChulo.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
