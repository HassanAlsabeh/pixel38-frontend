import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="header d__flex align__items__center pxy__30">
        <div className="navigation pxy__30">
          <ul className="navbar d__flex">
            <a href="/">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="#About">
              <li className="nav__items mx__15">About</li>
            </a>
            <a href="#Services">
              <li className="nav__items mx__15">Services</li>
            </a>
            <a href="#Portfolio">
              <li className="nav__items mx__15">Portfolio</li>
            </a>
            {/* <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a> */}
            <a href="#Contact">
              <li className="nav__items mx__15">Contact</li>
            </a>
            <a
              href=""
              onClick={() => {
                localStorage.removeItem("id");
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <li className="nav__items mx__15">Logout</li>
            </a>
          </ul>
        </div>
        {/* Toogle Menu */}
        <div className="toggle__menu">
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            fill="currentColor"
            class="bi bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {show ? (
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <a href="/">Home</a>
              </li>
              <li className="sideNavbar">
                <a href="#About">About</a>
              </li>
              <li className="sideNavbar">
                <a href="#Services">Services</a>
              </li>
              <li className="sideNavbar">
                <a href="#Portfolio">Portfolio</a>
              </li>
              {/* <li className="sideNavbar">
                  <a href="Blog">Blog</a>
                </li> */}
              <li className="sideNavbar">
                <a href="#Contact">Contact</a>
              </li>
              <li className="sideNavbar" onClick={() => {
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            navigate("/login")
          }}>
                <a href="#Contact">Logout</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
