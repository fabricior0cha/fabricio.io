import React from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { BsSend, BsGithub, BsLinkedin, BsFillMoonFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <header className="w-screen  flex justify-center py-12">
        <Menu>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>CV</MenuItem>
          <MenuItem>
            <BsSend />
          </MenuItem>
          <MenuItem>
            <BsGithub />
          </MenuItem>
          <MenuItem>
            <BsLinkedin />
          </MenuItem>
          <MenuItem>
            <BsFillMoonFill />
          </MenuItem>
        </Menu>
      </header>
    </>
  );
}
