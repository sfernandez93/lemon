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
          selectorName="color"
        ></DetailSelector>
        <DetailSelector
          options={data?.options?.storages}
          selectorName="storage"
        ></DetailSelector>
      </div>
      <DetailAddToCartButton />
    </form>
  );
};

export default DetailActions;
