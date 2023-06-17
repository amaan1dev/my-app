export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            books: [
              {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                image: "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
              },
              {
                id: 2,
                title: "1984",
                author: "George Orwell",
                image:
                  "https://m.media-amazon.com/images/I/514CVwOrybL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 3,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                image:
                  "https://m.media-amazon.com/images/I/71jaj8WPG4L._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 4,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                image:
                  "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 5,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                image:
                  "https://m.media-amazon.com/images/I/91ycNzZu1mL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 6,
                title: "To Kill a Kingdom",
                author: "Alexandra Christo",
                image:
                  "https://m.media-amazon.com/images/I/91fdrCnL9wL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 7,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                image:
                  "https://kbimages1-a.akamaihd.net/7a557cb3-f72a-47c3-992b-951c9566e4d4/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg",
              },
              {
                id: 8,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                image:
                  "https://m.media-amazon.com/images/I/91ocU8970hL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 9,
                title: "The Hunger Games",
                author: "Suzanne Collins",
                image:
                  "https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 10,
                title: "The Alchemist",
                author: "Paulo Coelho",
                image:
                  "https://m.media-amazon.com/images/I/51bVNTqHFlL._AC_UF1000,1000_QL80_.jpg",
              },
              {
                id: 11,
                title: "Brave New World",
                author: "Aldous Huxley",
                image:
                  "https://m.media-amazon.com/images/M/MV5BMjk4MTQ4NDItOGMyNC00MmIwLTg1NzAtNTNlNDgxZTBiMzZjXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
              },
              {
                id: 12,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                image:
                  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1371834025i/17157681.jpg",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};
