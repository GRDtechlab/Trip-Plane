import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <a href="/" target="_self">
        <img src="/logo(3).jpg" width={110} height={100} />
      </a>
      <Button> SignIn</Button>
    </div>
  );
}

export default Header;
