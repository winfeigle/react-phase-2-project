import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    color: "#00D4FF",
    padding: "10px 20px",
    margin: "0px 0px 0px 20px",
    background: "#0D2E4E",
    textDecoration: "inherit", /* no underline */
    borderRadius: "10px"
  };

    return(
        <div>
          <h1 className="site-title">
              VISION/BOARD
          </h1>
          <NavLink
            to="/"
            /* set "exact" so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={{
              border: "solid #00D4FF 1px",
            }}
            >Home</NavLink>

          <NavLink
            to="/goals"
            exact
            style={linkStyles}
            activeStyle={{
              border: "solid #00D4FF 1px",
            }}
            >Goals</NavLink>

        <NavLink
            to="/accomplishments"
            exact
            style={linkStyles}
            activeStyle={{
              border: "solid #00D4FF 1px",
            }}
            >Accomplishments</NavLink>
        <p>
      
        </p>
        </div>
    );
}

export default NavBar;