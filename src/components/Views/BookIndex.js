import React, { useState, useEffect } from "react";
import APIRequestDelete from "../../utilities/APIRequests/APIRequestDelete.js";
import { getBooks, getBookById } from "../../utilities/APIRequestsComplete.js";
import Constants from "../../utilities/Constants.js";

/**
 * Renders a table of books with options to view, edit, and delete each book.
 * @param {Object} props - The props object containing the refreshTable function, setShowDetailsBook function, and setShowUpdateBook function.
 * @returns {JSX.Element} - The JSX element representing the book table.
 */
export default function BookIndex(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(props.refreshTable);
    getBooks(setBooks);
  }, [props.refreshTable]);

  /**
   * Deletes a book from the database and updates the book table.
   * @param {number} bookToDelete - The ID of the book to delete.
   */
  function bookDelete(bookToDelete) {
    const url = Constants.API_URL_BOOK.API_URL_DELETE_BOOK + bookToDelete;

    APIRequestDelete(url);
    onBookDeleted();
  }

  /**
   * Displays an alert message indicating that a book has been successfully deleted and updates the book table.
   */
  function onBookDeleted() {
    alert("Book deleted successfully!");

    getBooks(setBooks);
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th scope="col">BookId</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
            <th scope="col">Language</th>
            <th scope="col">Genres</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td className="description">{book.description}</td>
              <td>{book.author}</td>
              <td>{book.language}</td>
              <td>{book.genres.join(", ")}</td>
              <td>
                <button
                  onClick={() => {
                    getBookById(book.id, props.setShowDetailsBook);
                  }}
                  className="btn btn-primary mx-1"
                >
                  Details
                </button>
                <button
                  onClick={() => {
                    getBookById(book.id, props.setShowUpdateBook);
                  }}
                  className="btn btn-primary mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `You are about to delete the book "${book.title}". Will you proceed?`
                      )
                    )
                      bookDelete(book.id);
                  }}
                  className="btn btn-danger mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
