import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function QuizList(props){
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);
  const quizs = useSelector(state => state.firestore.ordered.quizs);
  if (isLoaded(quizzes)) {
    return (
      <>
        <hr />
        {quizs.map((quiz) => {
            return <Quiz
              whenQuizClicked = { props.onQuizSelection }
              name={quiz.name}
              id={quiz.id}
              key={quiz.id}/>
          })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}


QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default Quiz;