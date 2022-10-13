const SearchResultImage = ({ imgUrl }) => {
  return (
    <div className="search-image-container" data-testid="search-result-image">
      <img src={imgUrl} alt="Mobile" />
    </div>
  );
};

export default SearchResultImage;
