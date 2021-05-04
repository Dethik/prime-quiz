import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props){
  const { quiz, onClickingDelete } = props;

  return (
    <>
      <h1>Quiz Detail</h1>
      <h3>{quiz.location} - {quiz.names}</h3>
      <p><em>{quiz.issue}</em></p>
      <button onClick = {()=> onClickingDelete(quiz.id) }>Close Quiz</button>
      <hr/>
    </>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;