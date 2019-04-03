import uuidv1 from 'uuid/v1';
import * as Answer from './Answer';

export const create = () => ({
  id: uuidv1(),
  userId: null,
  answers: []
});

export const getTotalPoints = quiz =>
  quiz.answers.reduce((accum, answer) => {
    if (!Answer.isValidAnswer(answer)) return accum;

    return answer.helpWasUsed ? accum + 5 : accum + 10;
  }, 0);

export const getAnswerById = (quiz, id) =>
  quiz.answers.find(answer => answer.id === id);

export const addAnswer = (rightAnswer, givenAnswer) => ({
  ...Answer.create(rightAnswer),
  givenAnswer
});

export const updateAnswer = (answerId, givenAnswer, quiz) =>
  quiz.answers.map(answer => {
    if (answer.id === answerId) answer.givenAnswer = givenAnswer;

    return answer;
  });

export default {
  create,
  getTotalPoints,
  getAnswerById,
  addAnswer,
  updateAnswer
};
