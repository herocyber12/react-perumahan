import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink,useLocation } from 'react-router-dom';
import React,{ useEffect} from "react";

const Footer = () => {
	const { pathname } = useLocation();

  const handleScroll = (hash) => {
      const targetElement = document.getElementById(hash.slice(1));
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth"
          });
      }
  };

  useEffect(() => {
      const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
              handleScroll(hash);
          } else {
              window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
          }
      };

      const isLandingPage = pathname === '/' || pathname === '/home';

      if (isLandingPage) {
          handleHashChange();
          window.addEventListener('hashchange', handleHashChange);
      }

      return () => {
          if (isLandingPage) {
              window.removeEventListener('hashchange', handleHashChange);
          }
      };
  }, [pathname]);
  
    return (
        <div>
         <footer className="mt-4 footer-shadow" id="footer">
	    	<div className="container-fluid" style={{height: '385px'}}>
	    		<div className="container">
	    		    <div className="row justify-content-center align-items-center" style={{height: '385px'}}>
	    				<div className="col-md-4 text-center col-xl-3">
	    					<img src={require('../assets/img/logo.webp')} className="mb-3 mt-3" alt="logo"/>
	    				</div>
	    				<div className="col-xl-2 offset-xl-0">
	    					<ul className="navbar-nav mb-3">
								<li className="nav-item">
                      			    <NavLink className="nav-link" to="/#top" onClick={() => handleScroll("#top")}>
                      			        Home
                      			    </NavLink>
                      			</li>
                      			<li className="nav-item">
                      			    <NavLink className="nav-link" to="/#tentang" onClick={() => handleScroll("#tentang")}>
                      			        Tentang Kami
                      			    </NavLink>
                      			</li>
								<li className="nav-item">
                      			    <NavLink className="nav-link" to="/#perumahan" onClick={() => handleScroll("#perumahan")}>
                      			       Perumahan
                      			    </NavLink>
                      			</li>
	    						<li className="nav-item">
                     			    <NavLink className="nav-link" to="/#kontak" onClick={() => handleScroll("#kontak")}>
                     			        Kontak Kami
                     			    </NavLink>
                     			</li>
	    					</ul>
	    				</div>
	    				<div className="col-xl-4">
	    					<div className="flex-column">
	    						<p>Marketing Online: <br/> Senin - Sabtu : 08.00 - 16.00</p>
	    						<p>Marketing Online: <br/> Senin - Minggu : 24 Jam</p>
	    					</div>
	    					<div>
	    						<a href="https://www.instagram.com/griya.surya_residence" className="nav-link">
									<FontAwesomeIcon icon="fa-brands fa-square-instagram" /> 27 Sky View
	    						</a>
	    						<a href="https://www.instagram.com/27sky_viewsmg" className="nav-link">
									<FontAwesomeIcon icon="fa-brands fa-square-instagram" /> Griya Surya Residence
	    						</a>
	    					</div>
	    					</div>
	    				</div>
	    		    </div>
	    	    </div>
	    	</footer>
        </div>
    );
};

export default Footer;