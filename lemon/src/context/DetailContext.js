import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../localStorage";

export const DetailContext = createContext({});

const DetailContextProvider = ({ children }) => {
  const [dataDetail, setDataDetail] = useState({});
  const [dataCart, setDataCart] = useState([]);
  const [numberItemsCart, setNumberItemsCart] = useState(0);

  useEffect(() => {
    const storedDataCart = getLocalStorage("num_items_cart");
    const timeExpire = getLocalStorage("num_items_cart_time_expire");

    if (storedDataCart && timeExpire > new Date().getTime()) {
      setNumberItemsCart(storedDataCart);
    }
  }, []);

  const getTextWithSpaces = (array) => {
    let text = "";

    if (Array.isArray(array)) {
      array?.forEach((element) => {
        text = text + element + " ";
      });
    } else {
      return array;
    }

    return text;
  };

  const setDetailFindById = async (id) => {
    console.log(id)
    const storedData = getLocalStorage(`dataDetail_${id}`);
    const timeExpire = getLocalStorage(`dataDetail_${id}_time_expire`);

    console.log(storedData)
    if (storedData && timeExpire > new Date().getTime()) {
      setDataDetail(storedData);
    } else {
      await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result)
            setLocalStorage(`dataDetail_${id}`, result);
            setLocalStorage(
              `dataDetail_${id}_time_expire`,
              new Date().getTime() + 60 * 60 * 1000
            ); /*One hour*/
            setDataDetail(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const addToChart = async (e) => {
    e.preventDefault();
    const data = {};

    data.colorCode = e.target.color.value;
    data.storageCode = e.target.almacenamiento.value;
    data.id = e.target.mobileId.value;

    setDataCart((prevState) => [...prevState, data]);

    const url = "https://front-test-api.herokuapp.com/api/cart";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setLocalStorage("num_items_cart", numberItemsCart + result?.count);
          setLocalStorage(
            "num_items_cart_time_expire",
            new Date().getTime() + 60 * 60 * 1000
          );
          setNumberItemsCart((prevState) => prevState + result?.count);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <DetailContext.Provider
      value={{
        dataDetail,
        setDataDetail,
        setDetailFindById,
        addToChart,
        dataCart,
        numberItemsCart,
        getTextWithSpaces,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export default DetailContextProvider;
