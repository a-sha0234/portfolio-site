import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //-----------------------------------------------------------------------------------------
  // handle navLink borders
  //-----------------------------------------------------------------------------------------

  const [isNavigate, setIsNavigate] = React.useState({
    //state to show if the link has been clicked
    homeLink: true,
    portfolioLink: "",
    contactLink: "",
  });

  function handleNavigate(event) {
    //function to set the isNavigation, sets boolean values to what
    const { name } = event.target;
    const arr = Object.keys(isNavigate);
    let checker = arr.filter((item) => item !== name); // seperate whats been clicked from whats not been clicked
    //next line was taken from:  https://stackoverflow.com/questions/54789406/convert-array-to-object-keys
    let checkedArr = checker.reduce(
      (acc, curr) => ((acc[curr] = false), acc),
      {}
    ); //turn the checker array into an object with the array as keys
    setIsNavigate({ ...checkedArr, [name]: true }); //put checkedArr into this new object and set the value thats being clicked as true
  }

  //-----------------------------------------------------------------------------------------
  // return JSX
  //-----------------------------------------------------------------------------------------

  return (
    <header>
      <nav className="navbar">
        <ul>
          <Link
            to="/"
            className="navbar__links"
            onClick={handleNavigate}
            name="homeLink"
            style={
              isNavigate.homeLink === true
                ? { borderBottom: "5px solid black" }
                : { borderBottom: "none" }
            }
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="navbar__links"
            name="portfolioLink"
            onClick={handleNavigate}
            style={
              isNavigate.portfolioLink === true
                ? { borderBottom: "5px solid black" }
                : { borderBottom: "none" }
            }
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="navbar__links"
            name="contactLink"
            onClick={handleNavigate}
            style={
              isNavigate.contactLink === true
                ? { borderBottom: "5px solid black" }
                : { borderBottom: "none" }
            }
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
