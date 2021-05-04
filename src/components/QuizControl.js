import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'


class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedQuiz: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({collection: 'quizzes', doc: id});
    this.setState({selectedQuiz: null});
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        name: quiz.get("name"),
        id: quiz.id
      }
      this.setState({selectedQuiz: firestoreQuiz });
    });
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <>
          <h1>You must be signed in to access quizzes.</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail quiz = {this.state.selectedQuiz}
                                    onClickingDelete = {this.handleDeletingQuiz}/>
                                      buttonText = "Return to Quiz List";
      }
      else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm onNewQuizCreation = {this.handleAddingNewQuizToList} />
                    buttonText = "Return to Quiz List";
      } else {
        currentlyVisibleState = <QuizList onQuizSelection = {this.handleChangingSelectedQuiz} />;
                  buttonText = "Add Quiz";
      }
      return (
        <>
          {currentlyVisibleState}
          <button onClick = {this.handleClick}>{buttonText}</button>
        </>
      );
    }
  }
}

QuizControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);