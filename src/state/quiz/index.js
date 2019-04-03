import * as Quiz from '../../domain/Quiz';
import { QUIZ } from '../actionTypes';

const initialState = Quiz.create();

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ.ADD_ANSWER:
      return { ...state, answers: [...initialState.answers, action.answer] };

    default:
      return state;
  }
};

export default { quizReducer };
