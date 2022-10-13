const SearchResultInfo = ({ brand, model, price }) => {
  return (
    <div className="search-result-container__info" data-testid="search-result-info">
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price ? `${price} €` : ""}</div>
    </div>
  );
};

export default SearchResultInfo;
