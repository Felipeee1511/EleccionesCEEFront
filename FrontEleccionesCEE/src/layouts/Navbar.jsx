import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/layouts/navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log("active", active);
    console.log("location", location.pathname);
  }, [active]);

  return (
    <>
      <nav className="navbar-top">
        <Link
          to=""
          className="navbar-button"
          onClick={() => {
            setActive("alumnos");
          }}
        >
          Alumnos
        </Link>
        <Link
          to=""
          className="navbar-button"
          onClick={() => {
            setActive("asambleas");
          }}
        >
          Asambleas
        </Link>

        
      </nav>
    </>
  );
};

export default Navbar;
