import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="w-full flex justify-center items-center fixed top-0 gradient-background h-16 z-10"
    >
      <img
        className="h-3/4"
        src={require("../../images/lemon-logo-removebg-preview.png")}
        alt="logo"
      ></img>
    </NavLink>
  );
};

export default Logo;
