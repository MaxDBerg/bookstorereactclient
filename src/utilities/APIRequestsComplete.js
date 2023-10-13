import APIRequestGet from "./APIRequests/APIRequestGet.js";
import Constants from "../utilities/Constants.js";

/**
 * Fetches books from the API and sets them using the provided setBooks function.
 * @param {function} setBooks - The function used to set the fetched books.
 */
export function getBooks(setBooks) {
  const url = Constants.API_URL_BOOK.API_URL_GET_BOOKS;
  APIRequestGet(url, setBooks);
}

/**
 * Fetches a book by its ID from the API and sets the book state.
 * @param {number} bookId - The ID of the book to fetch.
 * @param {function} setBook - The state setter function to set the fetched book.
 */
export function getBookById(bookId, setBook) {
  const url = Constants.API_URL_BOOK.API_URL_GET_BOOK_BY_ID + bookId;

  APIRequestGet(url, setBook);
}

/**
 * Makes a GET request to the API to retrieve a list of languages.
 * @param {function} setLanguages - A state setter function to update the languages state with the retrieved data.
 */
export function getLanguages(setLanguages) {
  const url = Constants.API_URL_LANGUAGE.API_URL_GET_LANGUAGES;

  APIRequestGet(url, setLanguages);
}

/**
 * Fetches authors from the API and sets them using the provided state setter function.
 * @param {function} setAuthors - The state setter function to set the fetched authors.
 */
export function getAuthors(setAuthors) {
  const url = Constants.API_URL_AUTHOR.API_URL_GET_AUTHORS;

  APIRequestGet(url, setAuthors);
}

/**
 * Fetches all genres from the API and sets them using the provided function.
 * @param {function} setGenres - A function that sets the genres in the component state.
 */
export function getGenres(setGenres) {
  const url = Constants.API_URL_GENRE.API_URL_GET_GENRES;

  APIRequestGet(url, setGenres);
}
