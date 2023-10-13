import React, { useState } from "react";
import "./App.css";
import BookIndex from "./components/Views/BookIndex";
import BookAdd from "./components/Views/BookAdd.js";
import BookUpdate from "./components/Views/BookUpdate.js";
import BookDetails from "./components/Views/BookDetails";
import { getBooks } from "./utilities/APIRequestsComplete.js";

/**
 * The main component of the Bookstore App.
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  const [books, setBooks] = useState([]);
  const [showAddBook, setShowAddBook] = useState(null);
  const [showUpdateBook, setShowUpdateBook] = useState(null);
  const [showDetailsBook, setShowDetailsBook] = useState(null);

  /**
   * Refreshes the table of books.
   */
  function refreshTable(){
    getBooks(setBooks);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {(showAddBook === null && showUpdateBook === null && showDetailsBook === null) && (
            <div>
              <h1 className="display-4">Max Dahlberg's Bookstore App</h1>
              <button onClick={() => setShowAddBook(true)} className="btn btn-primary mx-1">Add Book</button>
              <button onClick={refreshTable} className="btn btn-secondary mx-1">Refresh</button>
            </div>
          )}

          {(showAddBook === null && showUpdateBook === null && showDetailsBook === null) && 
            <BookIndex setShowDetailsBook={setShowDetailsBook} setShowUpdateBook={setShowUpdateBook} refreshTable={books} />}

          {showAddBook && <BookAdd onBookAdded={onBookAdded} />}
          {showUpdateBook !== null && <BookUpdate book={showUpdateBook} onBookUpdated={onBookUpdated} />}
          {showDetailsBook !== null && <BookDetails book={showDetailsBook} onBookDetails={onBookDetails} />}
        </div>
      </div>
    </div>
  );

  /**
   * Handles the event when a book is added.
   * @param {Object} bookAdded - The book that was added.
   */
  function onBookAdded(bookAdded) {
    setShowAddBook(null);
    if (bookAdded === null) {return;}

    alert("Book added successfully!");
  }

  /**
   * Handles the event when a book is updated.
   * @param {Object} bookUpdated - The book that was updated.
   */
  function onBookUpdated(bookUpdated) {
    setShowUpdateBook(null);
    if (bookUpdated === null){return;}

    alert("Book updated successfully!");
  }

  /**
   * Handles the event when a book's details are viewed.
   * @param {Object} bookDetails - The book whose details were viewed.
   */
  function onBookDetails(bookDetails) {
    setShowDetailsBook(bookDetails);
  }
}