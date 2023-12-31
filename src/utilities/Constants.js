const API_BASE_URL = "https://localhost:7082";

const ENDPOINTS_BOOK = {
  GET_BOOKS: "get-books",
  GET_BOOK_BY_ID: "get-book/",
  ADD_BOOK: "add-book",
  UPDATE_BOOK: "update-book/",
  DELETE_BOOK: "delete-book/",
};

const ENDPOINTS_AUTHOR = {
  GET_AUTHORS: "get-authors",
};

const ENDPOINTS_LANGUAGE = {
  GET_LANGUAGES: "get-languages",
};

const ENDPOINTS_GENRE = {
  GET_GENRES: "get-genres",
};

const API_URL_BOOK = {
  API_URL_GET_BOOKS: API_BASE_URL + "/" + ENDPOINTS_BOOK.GET_BOOKS,
  API_URL_GET_BOOK_BY_ID: API_BASE_URL + "/" + ENDPOINTS_BOOK.GET_BOOK_BY_ID,
  API_URL_ADD_BOOK: API_BASE_URL + "/" + ENDPOINTS_BOOK.ADD_BOOK,
  API_URL_UPDATE_BOOK: API_BASE_URL + "/" + ENDPOINTS_BOOK.UPDATE_BOOK,
  API_URL_DELETE_BOOK: API_BASE_URL + "/" + ENDPOINTS_BOOK.DELETE_BOOK,
};

const API_URL_AUTHOR = {
  API_URL_GET_AUTHORS: API_BASE_URL + "/" + ENDPOINTS_AUTHOR.GET_AUTHORS,
};

const API_URL_LANGUAGE = {
  API_URL_GET_LANGUAGES: API_BASE_URL + "/" + ENDPOINTS_LANGUAGE.GET_LANGUAGES,
};

const API_URL_GENRE = {
  API_URL_GET_GENRES: API_BASE_URL + "/" + ENDPOINTS_GENRE.GET_GENRES,
};

const Constants = {
  API_URL_BOOK,
  API_URL_AUTHOR,
  API_URL_LANGUAGE,
  API_URL_GENRE,
};

export default Constants;
