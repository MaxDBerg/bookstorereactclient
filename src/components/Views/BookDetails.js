import React from "react";

/**
 * Renders the details of a book.
 * @param {Object} props - The props object containing the book to display and the function to call when the "Back" button is clicked.
 * @param {Object} props.book - The book object to display.
 * @param {Function} props.onBookDetails - The function to call when the "Back" button is clicked.
 * @returns {JSX.Element} - The JSX code to render the book details.
 */
export default function BookDetails(props) {
  return (
    <div className="container">
      <h1 className="display-4">Book Details</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <strong>Book ID:</strong> {props.book.id}
          </p>
          <p className="card-text">
            <strong>Title:</strong> {props.book.title}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {props.book.description}
          </p>
          <p className="card-text">
            <strong>Author:</strong>{" "}
            {props.book.author ? props.book.author.name : ""}
          </p>
          <p className="card-text">
            <strong>Language:</strong>{" "}
            {props.book.language ? props.book.language.name : ""}
          </p>
          <p className="card-text">
            <strong>Genres:</strong>{" "}
            {props.book.genres
              ? props.book.genres.map((genre) => genre.name).join(", ")
              : ""}
          </p>
        </div>
      </div>
      <button
        onClick={() => props.onBookDetails(null)}
        className="btn btn-primary mx-1 my-1"
      >
        Back
      </button>
    </div>
  );
}
