import React from "react";
import logo from "../logo.svg";
import "./Header.css"

const Header = () => {
  return (
    <header className="mapping-results-header">
      <div className="mapping-results-logo">
        <img src={logo} alt="Quantique Logo" />
      </div>
      {/* <h1>Mapping Results</h1>
<p>Explore the mapping results to gain valuable insights. Analyze the data to enhance accuracy and decision-making.</p> */}
    </header>
  );
};

export default Header;
