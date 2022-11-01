import React from "react";
import "./NavInshorts.css";
import HumburgerDrawer from "./HumburgerDrawer";
import { Button } from "@mui/material";
import logoInShorts from "../logo_inshorts.png";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HumburgerDrawer
          className="humburgerDrawer"
          setCategory={setCategory}
        />

        <img
          src={logoInShorts}
          style={{ cursor: "pointer" }}
          alt="inshorts-logo"
          height="72px"
        />
        <Button>Login/signup</Button>
      </div>
    </div>
  );
};

export default NavInshorts;
