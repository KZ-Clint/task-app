import '../styles/Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
   
  return (
    <>
        <footer className="footerwrapper" >
            <div className="footerwrapperdiv" >
                <ul>
                  <Link to="/" className="link" >
                     <li> About Us </li>
                  </Link>
                  <Link to="/" className="link" >   
                     <li> Terms of service </li>
                  </Link> 
                  <Link to="/" className="link" >
                     <li> Privacy policy </li>
                  </Link>
                  <Link to="/" className="link" >
                     <li> Contact Us</li>
                  </Link>
                </ul>
                <div className="followuswrapper" >
                    <p> Follow us on </p>
                    <div>
                        <img src="/assets/linkedinmainicon.svg" alt="Linkedin" />
                        <img src="/assets/facebookmainicon.svg" alt="Facebook" />
                        <img src="/assets/instagramicon.svg" alt="Instagram" />
                    </div>
                </div>
            </div>
            <div className="copyrightwrapper" >
               <img src="/assets/copyright.svg" alt="Copyright" />
               <p> 2023, Blog App </p>
            </div>
        </footer>
    </>
  )
}
