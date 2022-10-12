import Logo from "./Logo";
import Shopping from "./Shopping";
import BreadCrumb from "./BreadCrumb";

const Header = () => {
  return (
    <div className="header-container">
      <div className="icon-shopping-container">
        <Logo />
        <Shopping />
      </div>
      <BreadCrumb />
    </div>
  );
};

export default Header;
