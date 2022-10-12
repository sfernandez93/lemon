import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";

import { DetailContext } from "../../context/DetailContext";

const Shopping = () => {
  const { numberItemsCart } = useContext(DetailContext);

  return (
    <div className="shopping-container">
      <FaCartArrowDown />
      <div data-testid="number-items">{numberItemsCart}</div>
    </div>
  );
};

export default Shopping;
