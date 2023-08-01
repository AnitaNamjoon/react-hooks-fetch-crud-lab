import React from "react";

function AdminNavBar({ onChangePage }) {
  const handleNewQuestionClick = () => {
    onChangePage('Form'); 
  };

  const handleViewQuestionsClick = () => {// Call the onChangePage function with 'List' as an argument
  };
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
