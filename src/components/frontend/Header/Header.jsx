import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "../../../assets/css/style.scss";
import './Header.css';
const Header = () => {
  return (
    <div className=" sticky top-0 z-40 bg-base-100">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {[
                { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/our-projects", label: "Our Projects" },
                { path: "/blogs", label: "Blogs" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                   
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="w-20 hidden lg:block">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/our-projects", label: "Our Projects" },
              { path: "/blogs", label: "Blogs" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/contact-us" className="primary-button">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
