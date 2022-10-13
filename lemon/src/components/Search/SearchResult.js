import { Link } from "react-router-dom";

import SearchResultImage from "./SearchResultImage";
import SearchResultInfo from "./SearchResultInfo";

const SearchResult = ({ data }) => {
  return (
    <Link className="search-result-container__item" to={`/detail/${data.id}`} data-testid="search-result">
      <SearchResultImage imgUrl={data.imgUrl}></SearchResultImage>
      <SearchResultInfo
        brand={data.brand}
        model={data.model}
        price={data.price}
      ></SearchResultInfo>
    </Link>
  );
};

export default SearchResult;
