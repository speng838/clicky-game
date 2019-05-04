import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div>
    <p className = "intro">Welcome to the Cartoon Network Clicky Game. Click an image once and then click another image. Do not click the same one twice. Your high score will be displayed up top. Enjoy!</p>
    </div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
    
  </div>
  
);

export default Header;
