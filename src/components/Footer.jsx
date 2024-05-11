import "./footer.css";

import Logo from "../images/logo.png";
import facebookIcon from "../images/icon-facebook.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

// const Footer = () => (
//   <footer className="footer-container">
//     <div className="footer-social-icon">
//       <img src={Logo} alt="Easybank Logo" className="footer-logo"/>
//       <div className="social-media-icons">
//         <a href="#" className="icon-link">
//           <img src={facebookIcon} alt="Facebook Icon" />
//         </a>
//         <a href="#" className="icon-link">
//           <img src={youtubeIcon} alt="Youtube Icon" />
//         </a>
//         <a href="#" className="icon-link">
//           <img src={twitterIcon} alt="Twitter Icon" />
//         </a>
//         <a href="#" className="icon-link">
//           <img src={pinterestIcon} alt="Pinterest Icon" />
//         </a>
//         <a href="#" className="icon-link">
//           <img src={instagramIcon} alt="Instagram Icon" />
//         </a>
//       </div>
//     </div>
//     <div className="links">
//       <ul>
//         {linkData.map((link, index) => (
//           <li key={index} className="link">
//             {link.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div className="credits">
//       <button className="request">Request Invite</button>
//       <span>&#169; Easybank. All rights reserved.</span>
//     </div>
//   </footer>
// );

// const linkData = [
//   {
//     title: "About Us",
//     url: "/about",
//   },
//   {
//     title: "Contact",
//     url: "/contact",
//   },
//   {
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     title: "Careers",
//     url: "/careers",
//   },
//   {
//     title: "Support",
//     url: "/support",
//   },
//   {
//     title: "Privacy Policy",
//     url: "/privacy-policy",
//   },
// ];

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-half">
        <div className="logo-media">
          <span className="footer-logo">
            <img src={Logo} alt="Clarisanter Logo" />
          </span>
          <div>
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="https://www.instagram.com/clari.sante" />
          </div>
        </div>
        <ul className="left-ul">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul className="right-ul">
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="credits">
        <button className="request">Download Our App Now !</button>
        <p>&#169; Easybank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
