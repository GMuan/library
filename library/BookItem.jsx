import React from "react";
import "./BookItem.css";

function BookItem({ title, id, createDate, isCheckedOut, onUpdate, onDelete, onRent }) {
  function onClickDelete() {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      onDelete(id);
    }
  }

  function onButtonClick() {
    onUpdate(id, !isCheckedOut);
  }

  const formattedCreateDate = new Date(createDate).toLocaleString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className={`BookItem ${isCheckedOut ? "checked-out" : ""}`}>
      <div className={`BookItem-status ${isCheckedOut ? "checked-out" : "available"}`}>
        {isCheckedOut ? "대출 중" : "O\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
      </div>
      <div className="title_col">{title}</div>
      <div className="id">{id}</div>
      <div className="date_col">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formattedCreateDate}
      </div>
      {!isCheckedOut && (
        <button className="btn_col" onClick={onButtonClick}>
          대출
        </button>
      )}
      <button className="btn_del" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default BookItem;