import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  // State to store the questions data
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the API when the component mounts
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    // Replace 'http://localhost:4000/questions' with the actual API endpoint
    fetch('http://localhost:4000/questions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* Render QuestionItem components for each question */}
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
};

export default QuestionList;
