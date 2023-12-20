import React from "react";
import "./BookRental.css";

function BookRental({ rentedBooks, onReturn }) {
  return (
    <div className="BookRental">
      <h3>대출 도서 목록</h3>
      {rentedBooks.length === 0 ? (
        <p>대출 중인 도서가 없습니다.</p>
      ) : (
        <ul>
          {rentedBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> (대출일: {book.rentDate})&nbsp;&nbsp;
              <button className="return" onClick={() => onReturn(book.id)}>반납</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookRental;