import React from "react";

export const Variant = () => {
  const api1 = "https://www.themealdb.com/api/json/v1/1/";
  const forApi1List = [
    {name: "listAllCategories",str: "list.php?c=list",value: "e.strCategory"},
    {name: "listAllArea", str: "list.php?a=list", value: "e.strArea"},
    {name: "listAllIngredients",str: "list.php?i=list", value: "e.strIngredient"},
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

  const valuesArr = {
    Category: [],
    Area: [],
    Ingradient: [],
  };

  let keyArr = Object.keys(valuesArr);

  const getList = async (i) => {
    console.log("start");
    const response = await fetch(api1 + forApi1List[i].str);
    if (response.ok) {
      const jsonData = await response.json();
      const elemData = jsonData.meals;
      const elemValue = elemData.map((e) => (e = eval(forApi1List[i].value)));
      valuesArr[keyArr[i]] = [...elemValue];
      console.log(" valuesArr=", valuesArr);
      console.log("respons=", response.ok, "  status=", response.status);
    } else {
      alert(" Error HTTP:", response.status);
    }
  };
 
 for (let i = 0; i < forApi1List.length; i++) getList(i);

  return (
    <div>
      Variant
    </div>
  );
};