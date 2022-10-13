const DetailPrice = ({ price }) => {
  return <div className="detail-price">{price ? price + " €" : ""}</div>;
};

export default DetailPrice;
