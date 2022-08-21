import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

    return(
        <div>
          <h1 className="site-title">
              VISION/BOARD
          </h1>
          <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={{
              background: "darkblue",
            }}
            >Home</NavLink>

          <NavLink
            to="/goals"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
            >Goals</NavLink>

        <NavLink
            to="/accomplishments"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
            >Accomplishments</NavLink>
        <p>
      
        </p>
        </div>
    );
}

export default NavBar;