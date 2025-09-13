import React, { useEffect, useState } from "react";
import { href } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#herosection" },
  { name: "About me", href: "#aboutme" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80" : "py-5"
      }`}
    ></nav>
  );
};

export default Navbar;
