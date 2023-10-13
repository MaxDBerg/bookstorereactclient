/**
 * Sends a DELETE request to the specified URL.
 * @param {string} url - The URL to send the DELETE request to.
 */
export default function itemDelete(url) {
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Delete request was successful.");
      } else {
        console.error(`Unexpected response status: ${response.status}`);
      }
    })
    .catch((error) => console.log(error));
}
