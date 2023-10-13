import React, { useState, useEffect } from "react";
import Constants from "../../utilities/Constants";
import APIRequestPut from "../../utilities/APIRequests/APIRequestPut";
import {
  getAuthors,
  getLanguages,
  getGenres,
} from "../../utilities/APIRequestsComplete.js";

/**
 * Component for updating a book.
 * @param {Object} props - The component props.
 * @param {Object} props.book - The book to update.
 * @param {Function} props.onBookUpdated - The function to call when the book is updated.
 * @returns {JSX.Element} - The JSX element to render.
 */
export default function BookUpdate(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorId: 0,
    languageId: 0,
    genreIds: [],
  });

  useEffect(() => {
    if (props.book) {
      setFormData({
        title: props.book.title || "",
        description: props.book.description || "",
        authorId: props.book.author ? props.book.author.id || 0 : 0,
        languageId: props.book.language ? props.book.language.id || 0 : 0,
        genreIds: props.book.genres
          ? props.book.genres.map((genre) => genre.id) || []
          : [],
      });
    }
  }, [props.book]);

  console.log("BookUpdate formData");
  console.log(formData);

  useEffect(() => {
    getAuthors(setAuthors);
    getLanguages(setLanguages);
    getGenres(setGenres);
  }, []);

  const [authors, setAuthors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);

  /**
   * Handles changes to the form data.
   * @param {Object} event - The event object.
   */
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(typeof event.target.value);
    setFormData({
      ...formData,
      [event.target.name]:
        parseInt(event.target.value).toString() === "NaN"
          ? event.target.value
          : parseInt(event.target.value),
    });
  };

  /**
   * Handles changes to the multi-select form data.
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
   * Handles form submission.
   * @param {Object} event - The event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookToUpdate = {
      id: props.book.id,
      title: formData.title,
      description: formData.description,
      authorId: formData.authorId,
      languageId: formData.languageId,
      genreIds: formData.genreIds,
    };

    const url = Constants.API_URL_BOOK.API_URL_UPDATE_BOOK;

    APIRequestPut(url, bookToUpdate);
    props.onBookUpdated(bookToUpdate);
  };

  return (
    <div>
      <form>
        <h1>Update Book</h1>

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
            {authors.map((author) => {
              if (formData.authorId === author.id) {
                return (
                  <option key={author.id} value={author.id} selected>
                    {author.name}
                  </option>
                );
              } else {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            className="form-control"
            name="languageId"
            onChange={handleChange}
          >
            {languages.map((language) => {
              if (formData.languageId === language.id) {
                return (
                  <option key={language.id} value={language.id} selected>
                    {language.name}
                  </option>
                );
              } else {
                return (
                  <option key={language.id} value={language.id}>
                    {language.name}
                  </option>
                );
              }
            })}
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
            {genres.map((genre) => {
              if (formData.genreIds.includes(genre.id)) {
                return (
                  <option key={genre.id} value={genre.id} selected>
                    {genre.name}
                  </option>
                );
              } else {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary mx-1 my-1">
          Submit
        </button>
        <button
          onClick={() => props.onBookUpdated(null)}
          className="btn btn-primary mx-1 my-1"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
