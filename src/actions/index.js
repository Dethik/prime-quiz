import * as c from './../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const deleteQuiz = id => ({
  type: c.DELETE_QUIZ,
  id
});