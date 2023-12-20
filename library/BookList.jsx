import React, { useState} from "react";
import BookItem from "./BookItem";
import "./BookList.css";

function BookList({ book, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function getSearchResult() {
    return search === "" ? book : book.filter((item) => item.title.includes(search));
  }

  return (
    <div className="BookList">
      <h3>도서목록</h3>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="header-row">
        <div>대여</div>
        <div>도서명</div>
        <div>등록번호</div>
        <div>등록일</div>
      </div>
      <div className="BookList-content">
        {getSearchResult().map((item) => (
          <BookItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;