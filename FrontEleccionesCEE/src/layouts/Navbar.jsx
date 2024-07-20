import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/layouts/navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname.split("/")[1]);

    console.log("active", active);
    console.log("location", location.pathname);
  }, [active]);

  return (
    <>
      <nav className="navbar-top">
        <Link
          to="/alumnos"
          className="navbar-button"
          onClick={() => {
            setActive("alumnos");
          }}
        >
          Alumnos
        </Link>
        <Link
          to="/asambleas"
          className="navbar-button"
          onClick={() => {
            setActive("asambleas");
          }}
        >
          Asambleas
        </Link>
        <Link
          to="/logout"
          className="navbar-button"
          onClick={() => {
            setActive("logout");
          }}
        >
          Logout
        </Link>
        
      </nav>
    </>
  );
};

export default Navbar;
