import { QUIZ } from '../actionTypes';
import * as Quiz from '../../domain/Quiz';

export const addAnswer = (rightAnswer, givenAnswer) => ({
  type: QUIZ.ADD_ANSWER,
  answer: Quiz.addAnswer(rightAnswer, givenAnswer)
});

export default { addAnswer };
