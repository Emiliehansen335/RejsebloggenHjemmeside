import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/Kinabilleder/Chinese-Dragon-PNG-Image.png" alt="makeuplogo" />
      </Link>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Blogindlæg</NavLink>
        </li>
        <li>
          <NavLink to="/About">Om mig</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">Galleri</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Kontakt mig</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
