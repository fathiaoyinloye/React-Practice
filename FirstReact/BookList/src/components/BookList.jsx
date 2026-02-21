import React, { useEffect, useState } from "react";
import styles from "./bookList.module.css";
import mockBookList from "./mock.jsx";

const BookList = () => {
  // setBooks = is a current state which is a BookList
  // setBooks = you setting the value of what is coming
  // getBooks = the already setState of what is coming
  const [getBooks, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");
  const [search, setInputSearch] = useState("");

  const handleInputSearch = (query) => {
    setBooks(
      getBooks.filter((book) =>
        book.toLowerCase().includes(query.trim().toLowerCase),
      ),
    );
  };

  const handleDelete = (clickedBook) => {
    setBooks(getBooks.filter((book) => book !== clickedBook));
  };

  const collectInput = (event) => {
    setNewBook(event.target.value.trim());
  };

  const handleSearch = (event) => {
    const a = event.target.value;
    setInputSearch(a);
    handleInputSearch(q);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    if (newBook) {
      setBooks((prev) => [...prev, newBook]);
    }
    setNewBook("");
  };

  const fetchBookList = async () => {
    try {
      const books = await mockBookList();
      setBooks(books.books);
      console.log(books.books);
    } catch (error) {}
  };

  useEffect(() => fetchBookList, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.pageBanner}>
          <h1 className="title"> Book Collections</h1>
          <p>Books</p>
          <form
            className={styles.searchBooks}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search books..."
            />
          </form>
        </div>
      </header>
      <div className={styles.bookList}>
        <h2 className={styles.title}>Books to Read</h2>

        <ul>
          {getBooks.map((book, index) => (
            <li key={index}>
              <span className={styles.name}>{book}</span>
              <span
                onClick={() => handleDelete(book)}
                className={styles.delete}
              >
                delete
              </span>
            </li>
          ))}
          {/* <li>
	    			<span className={styles.name}>Name of the Wind</span>
	    			<span className="delete">delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Wise Man's Fear</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>Kafka on the Shore</span>
	    			<span className={styles.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span className={styles.name}>The Master and the Margarita</span>
	    			<span className={styles.delete}>delete</span>
	    		</li> */}
        </ul>
      </div>
      <form onSubmit={handleAddBook} className={styles.addBook}>
        <input
          type="text"
          value={newBook}
          onChange={collectInput}
          placeholder="Add a book..."
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BookList;
