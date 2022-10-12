import { useContext, useEffect } from "react";

import Header from "../components/Comun/Header";
import SearchBar from "../components/Search/SearchBar";
import SearchResult from "../components/Search/SearchResult";
import { SearchContext } from "../context/SearchContext";

const Search = () => {
  let { dataMobiles, formValues, getDataFiltered } = useContext(SearchContext);

  useEffect(() => {
    getDataFiltered(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <SearchBar text={formValues?.filter}></SearchBar>
      <div className="search-result-container">
        {dataMobiles != null
          ? [...Object.keys(dataMobiles)].map((key) => (
              <SearchResult data={dataMobiles[key]} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
