/**
 * Sends a POST request to the specified URL with the provided item data.
 * @param {string} url - The URL to send the POST request to.
 * @param {object} itemToPost - The item data to include in the POST request body.
 * @returns {Promise} A Promise that resolves with the response data if the request is successful, or rejects with an error if the request fails.
 */
export default function itemPost(url, itemToPost) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemToPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
}
