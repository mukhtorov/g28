/* eslint-disable react/jsx-key */
import { useState } from "react";
import Login from "../components/Login";
import Reset from "../components/Reset";
import Home from "../components/Home";
import Contact from "../components/Home copy";
import { Container, MenuItem, MenuWrapper } from "./style";

export const Root = () => {
  const [state, setState] = useState("Home");

  const onToggle = (name) => setState(name);
  console.log(state, "state");
  return (
    <Container>
      <MenuWrapper>
        {/* <NavLink to={'/home'}>Home</NavLink> */}
        <MenuItem active={state === "Home"} onClick={() => onToggle("Home")}>
          Home
        </MenuItem>
        <MenuItem active={state === "Login"} onClick={() => onToggle("Login")}>
          Login
        </MenuItem>
        <MenuItem active={state === "Reset"} onClick={() => onToggle("Reset")}>
          Reset
        </MenuItem>
        <MenuItem
          active={state === "Contact"}
          onClick={() => onToggle("Contact")}
        >
          Contact
        </MenuItem>
      </MenuWrapper>
      {/* <Route path="/Home" element={<Home />} /> */}
      {/* <Route path="/Home" element={<Home />} /> */}
      {state === "Home" && <Home />}
      {state === "Login" && <Login />}
      {state === "Reset" && <Reset />}
      {state === "Contact" && <Contact />}
    </Container>
  );
};

export default Root;
