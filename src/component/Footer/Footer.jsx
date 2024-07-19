  // // eslint-disable-next-line no-unused-vars
  // import React from "react";
  // import "./Footer.css";
  // import { assets } from "../../../public/assets";

  // const Footer = () => {
  //   return (
  //     <div className="footer" is="footer">
  //       <div className="footer-content">
  //         <div className="footer-content-left">
  //             <img src={assets.logo} alt="" />
  //             <p> Online food ordering is the process of ordering food, for delivery or pickup, from a website or other application</p>
  //             <div className="footer-social-icon">
  //                     <img src={assets.facebook_icon} alt="" />
  //                     <img src= {assets.twitter_icon} alt="" />
  //                     <img src={ assets.linkedin_icon} alt="" />
  //             </div>
  //         </div>
  //         <div className="footer-content-center">
  //                 <h2>COMPANY</h2>
  //                 <ul>
  //                     <li>Home</li>
  //                     <li>About us</li>
  //                     <li>Delivery</li>
  //                     <li>Privary polocy</li>
  //                 </ul>
  //         </div>
  //         <div className="footer-content-right">
  //         <h2> GET IN TOUCH</h2>
  //                 <ul>
  //                     <li>+91-9549539519</li>
  //                     <li>Contact@tomato.com</li>
  //                 </ul>
  //         </div>
  //       </div>
  //       <hr />
  //       <p className="footer-copyright"> Copyright 2024 @ Tomato.com - All Right Reserved. </p>
  //     </div>
  //   );
  // };

  // export default Footer;


  // eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { assets } from "../../../public/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Online food ordering is the process of ordering food, for delivery
            or pickup, from a website or other application.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9549539519</li>
            <li>Contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
