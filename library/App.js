import React, { useState, useRef} from "react";
import "./App.css";
import BookAdd from "./BookAdd";
import BookList from "./BookList";
import BookRental from "./BookRental";


function App() {
  const idRef = useRef(0);
  const setIdRef = (value) => {
    idRef.current = value;
  };
  const [book, setBook] = useState([
    {
      isCheckedOut: false,
      title: "인문",
      id: idRef.current,
      createDate: new Date().getTime(),
    },
    {
      isCheckedOut: false,
      title: "기술과학",
      id: idRef.current + 1,
      createDate: new Date().getTime(),
    },
    {
      isCheckedOut: false,
      title: "언어",
      id: idRef.current + 2,
      createDate: new Date().getTime(),
    },
    {
      isCheckedOut: false,
      title: "종교",
      id: idRef.current + 3,
      createDate: new Date().getTime(),
    },
    {
      isCheckedOut: false,
      title: "역사",
      id: idRef.current + 4,
      createDate: new Date().getTime(),
    },
  ]);

  const [rentedBooks, setRentedBooks] = useState([]);

  function onCreate(title) {
    const newItem = {
      isCheckedOut: false,
      title,
      id: book.length,
      createDate: new Date().getTime(),
    };
    setBook((prevBook) => [...prevBook, newItem]);
    setIdRef((prevIdRef) => prevIdRef + 1);
  }

  function onUpdate(id, isCheckedOut, rentDate) {
    const updatedBooks = book.map((item) =>
      item.id === id
        ? {
            ...item,
            isCheckedOut,
            rentDate: isCheckedOut
              ? new Date().toLocaleString("ko-KR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : null,
          }
        : item
    );

    setBook(updatedBooks);

    if (isCheckedOut) {
      const rentedBook = updatedBooks.find((item) => item.id === id);
      setRentedBooks((prevRentedBooks) => [...prevRentedBooks, rentedBook]);
    } else {
      setRentedBooks((prevRentedBooks) =>
        prevRentedBooks.filter((item) => item.id !== id)
      );
    }
  }

  function onDelete(targetId) {
    setBook((prevBook) => prevBook.filter((item) => item.id !== targetId));
  }

  function onReturn(bookId) {
    const updatedBooks = book.map((item) =>
      item.id === bookId ? { ...item, isCheckedOut: false } : item
    );

    setBook(updatedBooks);

    const returnedBook = rentedBooks.find((item) => item.id === bookId);
    setRentedBooks((prevRentedBooks) =>
      prevRentedBooks.filter((item) => item.id !== bookId)
    );
  }

  return (
    <div className="App">
      <BookList book={book} onUpdate={onUpdate} onDelete={onDelete} />
      <BookAdd onCreate={onCreate} />
      <BookRental rentedBooks={rentedBooks} onReturn={onReturn} />
    </div>
  );
}

export default App;