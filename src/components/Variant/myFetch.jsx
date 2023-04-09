export const myFetch = (api) => {
  
  fetch(api)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then((response) => {
      if (response.headers["content-tipe"] !== "application/json") {
        let error = new Error("Uncorrect answer from server");
        error.response = response;
        throw error;
      } else {
        return response;
      }
    })
    .then((response) => (response.ok)? response.json() : Promise.reject('it is not OK:',response.status)) 
    .then((data) => console.log("res=", response))
    .then((data) => console.log("+", data))
    .catch((e) => {
      console.log("Error:", e.message);
      console.log(e.response);
    });
    
    return response;
};
