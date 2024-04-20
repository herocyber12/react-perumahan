import React,{useEffect} from "react";
import { NavLink, useLocation} from 'react-router-dom';

const Navbar = () => {
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
      <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container">
              <a className="navbar-brand" href="#">
                  <img src={require('../assets/img/logo.webp')} className="img-fluid" style={{ width: "75px" }} alt="logo" />
              </a>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/" onClick={() => handleScroll("#")}>
                              Home
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/#tentang" onClick={() => handleScroll("#tentang")}>
                              Tentang Kami
                          </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                          <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                              Perumahan
                          </a>
                          <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                          >
                              <NavLink className="dropdown-item" to="/griya_surya" onClick={() => handleScroll("#griya_surya")}>
                                  Griya Surya Residence
                              </NavLink>
                              <NavLink className="dropdown-item" to="/sky_view" onClick={() => handleScroll("#sky_view")}>
                                  27 Sky View
                              </NavLink>
                          </div>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/#kontak" onClick={() => handleScroll("#kontak")}>
                              Kontak Kami
                          </NavLink>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;