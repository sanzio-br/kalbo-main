import { social } from "./data";
import logo from "../../assets/images/logo.PNG";
import { FaBars } from "react-icons/fa";
const Navbar= () => {
  return (
    <>
      <div className="topbar container">
        <div className="col-md-6 left">
          <a href="mailto:kalboadventures2019@gmail.com">kalboadventures2019@gmail.com</a> <span>|</span>
          <a href="tel:+254720126177">+254720126177</a>
        </div>
        <div className="col-md-6 right">
              <a href="/kalbo-main">FAQ</a> <span>|</span> 
              <a href="/kalbo-main/booking">Booking</a>
          </div>
      </div>
      <nav className="navbar navbar-expand-lg container sticky-top mt-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/kalbo-main">
            <img
              src={logo}
              alt=""
              width="120"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo-main"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/kalbo-main/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/kalbo-main/safari-packages"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/kalbo-main/hire-ride">
                      Hire Ride
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo-main/safari-packages">
                      Team building
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo-main/safari-packages">
                      City excusion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo-main/safari-packages/beach-safaris">
                      Beach safaris
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kalbo-main/safari-packages">
                      Hotel reservation
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo-main/custom-safaris"
                >
                  Custom safaris
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo-main/blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo-main/booking"
                >
                  Online Booking
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/kalbo-main/contact-us"
                >
                  Contacts
                </a>
              </li>
            </ul>
            <div className="d-flex icons">
              {social.map(({ id, url, icon }) => {
                return (
                  <a key={id} href={url}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;