import React from "react";

function Header() {
    return(
        <header>
      <nav>
        <h1 className="site-title">
          VISION/BOARD
        </h1>
        <div className="navigation">
          <a className="button" href="#">
            Goals
          </a>
          <a className="button" href="#">
            Accomplishments
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Header;