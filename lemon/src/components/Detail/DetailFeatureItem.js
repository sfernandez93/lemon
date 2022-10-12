const DetailFeatureItem = ({ title, subtitle, aditionalInfo }) => {
  return (
    <div className="detail-feature-item">
      <div className="detail-feature__info">
        <div className="detail-feature-info__title">{title}</div>
        <div className="detail-feature-info__subtitle">{subtitle}</div>
        {aditionalInfo ? (
          <div className="detail-feature-info__subtitle">{aditionalInfo}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default DetailFeatureItem;
