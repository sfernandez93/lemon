import { FaSearch } from "react-icons/fa";

import SearchInput from "./SearchInput";

const SearchBar = ({text}) => {
  return (
      <form className="search-bar">
        <SearchInput
          name={"filter"}
          placeholder={"¿Qué estás buscando?"}
          icon={<FaSearch />}
          text={text}
        ></SearchInput>
      </form>
  );
};

export default SearchBar;
