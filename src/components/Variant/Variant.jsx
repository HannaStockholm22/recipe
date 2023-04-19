import React, { useState, useRef, useEffect } from "react";
import ls from './Variant.module.css';
import { Search } from "../Search/Search";
import { SearchByOne } from "../SearchByOne/SearchByOne";

export const Variant = () => {
  const api1 = "https://www.themealdb.com/api/json/v1/1/";
  const forApi1List = [
    {id:0, key:"Category", name: "listAllCategories",str: "list.php?c=list",value: "strCategory"},
    {id:1, key:"Area", name: "listAllArea", str: "list.php?a=list", value: "strArea"},
    {id:1, key:"Ingredient",name: "listAllIngredients",str: "list.php?i=list", value: "strIngredient"}
  ];
  /*const forApi1Search = [
    { name: "firstLetter", str: "search.php?f="},
    { name: "byName", str: "search.php?s="},
    { name: "byId", str: "lookup.php?i=" },
  ];
  const forApi1Filter = [
    { name: "filterByCategoriesr", str: "filter.php?c="},
    { name: "filterByArea", str: "filter.php?a="},
    { name: "filterByIngr", str: "filter.php?i="},
  ]; */
  let keyArr=[];
  let valuesArr=[];
  
   keyArr=forApi1List.map(e=> e=e.key);
   console.log("keyArr=",keyArr);
 
 
  const [value,setValue]=useState([]);
  useEffect(() => {
      forApi1List.forEach((e,index)=>{ getData(forApi1List[index].name, api1+forApi1List[index].str, index) })
  }, []);
  
  const getData = async (inData,api,i) => {
    
    const check = localStorage.getItem(inData);
    if (check) {
        setValue(JSON.parse(check));
        valuesArr[keyArr[i]]=JSON.parse(check);
        console.log(keyArr[i],"=",valuesArr[keyArr[i]]);
      }  
    else {
      const response = await fetch(api);
      if (response.ok) {
        const jsonData = await response.json();
        const elemData = jsonData.meals;
        console.log("elemData=", elemData);
        const elemValue = elemData.map((e) => (e[forApi1List[i].value]));
        valuesArr[keyArr[i]] = [...elemValue];
        console.log(" valuesArr=", valuesArr);
        localStorage.setItem(inData, JSON.stringify(elemValue));
        setValue(elemValue);   
        console.log("respons=", response.ok, "  status=", response.status);
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };

 const inputEl = useRef();
 let choice;

  const onClickBtn = () => {
  choice = inputEl.current.value;
  console.log('choice=', choice);
} 

  const SearchElem=keyArr.map((e,index)=>{
    return(
        <div className={ls.radio}  key={index} >
            <input className={ls.input} id={e} ref={inputEl} type="radio" name="radio" value={index} />
            <label className={ls.label} htmlFor={e} onClick={onClickBtn} >{e}</label>  
            <SearchByOne  oneKey={keyArr[index]} valArrForOneKey ={JSON.parse(localStorage.getItem(forApi1List[index].name))}/>   
        </div>  
    )
   }) 
  return (
    <div className={ls.list}>
      {SearchElem }
    </div>
  );
};
