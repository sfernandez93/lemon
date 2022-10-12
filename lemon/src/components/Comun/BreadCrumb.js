import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DetailContext } from "../../context/DetailContext";

const BreadCrumb = () => {
  const { dataDetail } = useContext(DetailContext);
  const location = useLocation();

  return (
    <nav className="breadcrumb-container">
      <NavLink to={"/"}>
        <div>Home</div>
      </NavLink>
      {location && location?.pathname.includes("detail") ? (
        <div>
          <div>{">"}</div>
          <NavLink to={`/detail/${dataDetail.id}`}>
            <div className="">{"Detalle"}</div>
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};
export default BreadCrumb;
