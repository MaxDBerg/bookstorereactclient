import React, { useState, useEffect } from "react";
import Constants from "../../utilities/Constants";
import {
  getAuthors,
  getLanguages,
  getGenres,
} from "../../utilities/APIRequestsComplete.js";
import APIRequestPost from "../../utilities/APIRequests/APIRequestPost";

/**
 * Renders a form for adding a new book to the bookstore.
 * @param {Object} props - The props object.
 * @param {Function} props.onBookAdded - The function to call when a new book is added.
 * @returns {JSX.Element} - The JSX code for the component.
 */
export default function BookAdd(props) {
  const [formData, setFormData] = useState({
    title: "testBookReact",
    description: "testDescriptionReact",
    authorId: 1,
    languageId: 1,
    genreIds: [],
  });

  const [authors, setAuthors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);

  /**
   * Fetches the list of authors, languages, and genres from the server.
   */
  useEffect(() => {
    getAuthors(setAuthors);
    getLanguages(setLanguages);
    getGenres(setGenres);
  }, []);

  /**
   * Updates the form data when a form field is changed.
   * @param {Object} event - The event object.
   */
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(typeof event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Updates the form data when a multi-select field is changed.
   * @param {Object} event - The event object.
   */
  const handleMultiSelectChange = (event) => {
    console.log("Multiple select value");
    console.log(event.target.name);
    console.log(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
    console.log(
      typeof Array.from(event.target.selectedOptions, (option) => option.value)
    );

    let selectedValue = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setFormData({
      ...formData,
      [event.target.name]: selectedValue,
    });
  };

  /**
   * Submits the form data to the server when the form is submitted.
   * @param {Object} event - The event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookToAdd = {
      title: formData.title,
      description: formData.description,
      authorId: formData.authorId,
      languageId: formData.languageId,
      genreIds: formData.genreIds,
    };

    const url = Constants.API_URL_BOOK.API_URL_ADD_BOOK;
    props.onBookAdded(APIRequestPost(url, bookToAdd));
  };

  return (
    <div>
      <form>
        <h1>Add Book</h1>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={formData.title}
            className="form-control"
            name="title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            value={formData.description}
            className="form-control"
            name="description"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            className="form-control"
            name="authorId"
            onChange={handleChange}
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            className="form-control"
            name="languageId"
            onChange={handleChange}
          >
            {languages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="genres">Genres</label>
          <select
            className="form-control"
            name="genreIds"
            onChange={handleMultiSelectChange}
            multiple
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mx-1 my-1">
          Submit
        </button>
        <button
          onClick={() => props.onBookAdded(null)}
          className="btn btn-primary mx-1 my-1"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
