export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hardcoder server URL here
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByFilter(filter) {

  // TODO on server we will support multi value
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    // TODO: we will not hardcoder server URL here
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
