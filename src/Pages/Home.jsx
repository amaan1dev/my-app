import React, { useEffect, useState } from "react";
import { fakeFetch } from "../Data/books";
import "./home.css";
import { Link } from "react-router-dom";
import { BooksProvider } from "../contexts/bookContext";
import Search from "./Search";

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/books");
      console.log(response.data.books);
      setData(response.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getRandomBooks = (count, excludedBooks) => {
    const availableBooks = data.filter(
      (book) => !excludedBooks.some((excludedBook) => excludedBook.id === book.id)
    );
    const shuffledBooks = availableBooks.sort(() => Math.random() - 0.5);
    return shuffledBooks.slice(0, count);
  };

  const renderBooks = (books) => {
    return books.map((book) => (
      <div key={book.id} className="book">
        <img src={book.image} alt={book.title} />
        <div className="book-details">
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
          <div className="sort-dropdown">
            <select
              id="reading-status-selector"
              onChange={(e) => setSelectedStatus(e.target.value)}
              value={selectedStatus}
            >
              <option value="">Select...</option>
              <option value="currently-reading">Currently Reading</option>
              <option value="want-to-read">Want to Read</option>
              <option value="already-read">Already Read</option>
            </select>
          </div>
        </div>
      </div>
    ));
  };

  const currentlyReadingBooks = getRandomBooks(3, []);
  const wantToReadBooks = getRandomBooks(4, currentlyReadingBooks);
  const alreadyReadBooks = getRandomBooks(5, [...currentlyReadingBooks, ...wantToReadBooks]);

  return (
    <BooksProvider>
      <div className="body">
        <h1>Dodo's Bookshelf</h1>
        <Link to="/search" className="search-page-link">
          Go to Search Page
        </Link>
        <div className="main-container">
          <div className="section">
            <h2>Currently Reading</h2>
            {renderBooks(currentlyReadingBooks)}
          </div>
          <div className="section">
            <h2>Want to Read</h2>
            {renderBooks(wantToReadBooks)}
          </div>
          <div className="section">
            <h2>Already Read</h2>
            {renderBooks(alreadyReadBooks)}
          </div>
        </div>
      </div>
    </BooksProvider>
  );
};


