import { useContext } from "react";

import DetailSelector from "./DetailSelector";
import { DetailContext } from "../../context/DetailContext";
import DetailAddToCartButton from "./DetailAddToCartButton";

const DetailActions = ({ data }) => {
  const { addToChart } = useContext(DetailContext);

  return (
    <form className="detail-actions-container" onSubmit={addToChart}>
      <div className="detail-actions-form">
        <input hidden name="mobileId" value={data?.id}></input>
        <DetailSelector
          options={data?.options?.colors}
          selectorTitle="Color"
          selectorName="color"
        ></DetailSelector>
        <DetailSelector
          options={data?.options?.storages}
          selectorTitle="Almacenamiento"
          selectorName="almacenamiento"
        ></DetailSelector>
      </div>
      <DetailAddToCartButton />
    </form>
  );
};

export default DetailActions;
