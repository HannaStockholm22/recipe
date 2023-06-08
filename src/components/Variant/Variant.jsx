import React, { useState, useEffect} from "react";
import ls from "./Variant.module.css";
import { AntdSearch } from "../AntdSearch/AntdSearch";
import { Result } from "../Result/Result";

export const Variant = ({updateBasket,api1}) => {
  const [selectValues, setSelectValues] = useState([undefined,undefined,undefined]);
  const forApi1List = [
    {
      id: 0,
      key: "Category",
      name: "listAllCategories",
      str: "list.php?c=list",
      value: "strCategory",
    },
    {
      id: 1,
      key: "Area",
      name: "listAllArea",
      str: "list.php?a=list",
      value: "strArea",
    },
    {
      id: 2,
      key: "Ingredient",
      name: "listAllIngredients",
      str: "list.php?i=list",
      value: "strIngredient",
    },
  ];

  const forApi1Filter = [
    { id: 0, name: "filterByCategoriesr", str: "filter.php?c=" },
    { id: 1, name: "filterByArea", str: "filter.php?a=" },
    { id: 2, name: "filterByIngr", str: "filter.php?i=" },
  ];

  const [value, setValue] = useState([]); /* list of elements */
  const [arrValue, setArrValue] = useState([]); /*array of findMeal */
  const [newVal, setnewVal] = useState(""); /* One of the variants in DropDown list*/

  useEffect(() => {
    forApi1List.forEach((e, index) => {
      getDataList(
        forApi1List[index].name,
        api1 + forApi1List[index].str,
        index
      );
    });
  }, []);

 

  const updateUserChoise = (el, ind, keyChoice) => {
    setnewVal(el);
    const vals = [undefined,undefined,undefined];
    vals[ind] = el;
    setSelectValues(vals);

    getDataFilter(
      forApi1Filter[ind].name + el,
      api1 + forApi1Filter[ind].str + el,
      ind
    );
  };

  let keyArr = [];
  let valuesArr = [];
  keyArr = forApi1List.map((e) => (e = e.key));

  const getDataList = async (inData, api, i) => {
    const check = localStorage.getItem(inData);
    if (check) {
      setValue(JSON.parse(check));
      valuesArr[keyArr[i]] = JSON.parse(check);
    } else {
      const response = await fetch(api);
      if (response.ok) {
        const jsonData = await response.json();
        const elemData = jsonData.meals;
        const elemValue = elemData.map((e) => e[forApi1List[i].value]);
        valuesArr[keyArr[i]] = [...elemValue];
        localStorage.setItem(inData, JSON.stringify(elemValue));
        setValue(elemValue);
        console.log("respons=", response.ok, "  status=", response.status," value=",value);
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };

  const getDataFilter = async (inData, api, i) => {
    const check = localStorage.getItem(inData);
    if (check) {
      setArrValue(JSON.parse(check));
    } else {
      const response = await fetch(api);
      if (response.ok) {
        const jsonData = await response.json();
        const elemData = jsonData.meals;
        localStorage.setItem(inData, JSON.stringify(elemData));
        setArrValue(elemData);     
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };



  const SearchElem = keyArr.map((e, index) => {
      return (
        <div className={ls.radio} key={index}>
          <label className={ls.label} htmlFor={e}> {e} </label>
          <AntdSearch oneKey={keyArr[index]} 
            value={selectValues[index]}
            ind={index}
            valArrForOneKey={JSON.parse(localStorage.getItem(forApi1List[index].name))}
            updateUserChoise={updateUserChoise}       
          />
        </div>
      );
    }
  );

  return (
    <>
      <div className={ls.list}>{SearchElem}</div>
      <Result
        updateBasket={updateBasket}
        newVal={newVal}
        findEl={arrValue}
        api1={api1}    
      />
       
    </>
  );
};
