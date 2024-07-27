/* eslint-disable react/prop-types */
import { memo } from "react";
import { MenuItem, Wrapper } from "./style";

export const Navbar = (props) => {
  console.log("navbar");

  return (
    <Wrapper>
      <MenuItem length={props.length}>Home</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Reset</MenuItem>
      <MenuItem>Info {props.length}</MenuItem>
    </Wrapper>
  );
};

export default memo(Navbar);
