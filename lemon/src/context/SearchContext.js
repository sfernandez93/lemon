import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../localStorage";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [dataMobiles, setDataMobiles] = useState([]);
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    let newObject = {};
    newObject[event.target.name] = event.target.value;
    getDataFiltered(event.target.value);
    updateFormValues(newObject);
  };

  const updateFormValues = (newObject) => {
    setFormValues((prevState) => ({
      ...prevState,
      ...newObject,
    }));
  };

  const getDataFiltered = async (filter) => {
    const storedData = await getLocalStorage("phoneData");
    const timeExpire = getLocalStorage(`phoneData_time_expire`);

    let resultFiltered = [];

    if (storedData && timeExpire > new Date().getTime()) {
      resultFiltered = await storedData.filter(
        (x) =>
          checkIfIncluded(x?.brand, filter) || checkIfIncluded(x?.model, filter)
      );
    } else {
      await fetch(`https://front-test-api.herokuapp.com/api/product`)
        .then((res) => res.json())
        .then(
          (result) => {
            setLocalStorage("phoneData", result);
            setLocalStorage(
              "phoneData_time_expire",
              new Date().getTime() + 60 * 60 * 1000
            );
            resultFiltered = result.filter(
              (x) =>
                checkIfIncluded(x?.brand, filter) ||
                checkIfIncluded(x?.model, filter)
            );
          },
          (error) => {
            console.log(error);
          }
        );
    }

    setDataMobiles(resultFiltered);
  };

  const checkIfIncluded = (property, filter) =>
    property?.toUpperCase().includes(filter.toUpperCase());

  return (
    <SearchContext.Provider
      value={{
        setDataMobiles,
        dataMobiles,
        formValues,
        setFormValues,
        getDataFiltered,
        handleChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
