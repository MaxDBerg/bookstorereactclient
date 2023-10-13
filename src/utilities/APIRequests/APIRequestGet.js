/**
 * Makes a GET request to the specified URL and sets the response data to the provided state function.
 * @param {string} url - The URL to make the GET request to.
 * @param {function} setFunction - The state function to set the response data to.
 */
export default function itemGet(url, setFunction) {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => setFunction(data))
    .catch((error) => console.log(error));
}
