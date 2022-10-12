import { useContext } from "react";

import DetailFeatureItem from "./DetailFeatureItem";
import { DetailContext } from "../../context/DetailContext";

const DetailFeatures = ({ data }) => {
  const { getTextWithSpaces } = useContext(DetailContext);

  return (
    <div className="detail-features-container">
      <DetailFeatureItem
        title={"Marca"}
        subtitle={data?.brand}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Modelo"}
        subtitle={data?.model}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Precio"}
        subtitle={data?.price ? `${data?.price} euros` : ""}
      ></DetailFeatureItem>
      <DetailFeatureItem title={"CPU"} subtitle={data?.cpu}></DetailFeatureItem>
      <DetailFeatureItem title={"RAM"} subtitle={data?.ram}></DetailFeatureItem>
      <DetailFeatureItem
        title={"Sistema Operativo"}
        subtitle={data?.os}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Resolucion de pantalla"}
        subtitle={data?.displayResolution}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Bateria"}
        subtitle={data?.battery}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Camaras"}
        subtitle={getTextWithSpaces(data?.primaryCamera)}
        aditionalInfo={getTextWithSpaces(data?.secondaryCmera)}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Dimensiones"}
        subtitle={data?.dimentions}
      ></DetailFeatureItem>
      <DetailFeatureItem
        title={"Peso"}
        subtitle={data?.weight}
      ></DetailFeatureItem>
    </div>
  );
};

export default DetailFeatures;
