/**
 * Sends a PUT request to the specified URL with the provided item to update.
 * @param {string} url - The URL to send the PUT request to.
 * @param {object} itemToPut - The item to update in the request body.
 */
export default function itemPut(url, itemToPut) {
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemToPut),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
