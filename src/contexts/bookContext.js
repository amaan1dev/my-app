import React, { createContext, useState } from "react";

export const BookContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <BookContext.Provider value={{ books, selectedStatus }}>
      {children}
    </BookContext.Provider>
  );
}
