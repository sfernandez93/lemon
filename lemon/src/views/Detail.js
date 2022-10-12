import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Comun/Header";
import { DetailContext } from "../context/DetailContext";
import DetailImage from "../components/Detail/DetailImage";
import DetailFeatures from "../components/Detail/DetailFeatures";
import DetailActions from "../components/Detail/DetailActions";

const Detail = () => {
  const { id } = useParams();
  const { dataDetail, setDetailFindById } = useContext(DetailContext);

  useEffect(() => {
    setDetailFindById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div className="detail-container">
        <div className="detail-image-container">
          <DetailImage imgUrl={dataDetail?.imgUrl}></DetailImage>
          <DetailActions data={dataDetail}></DetailActions>
        </div>
        <DetailFeatures data={dataDetail}></DetailFeatures>
      </div>
    </div>
  );
};
export default Detail;
