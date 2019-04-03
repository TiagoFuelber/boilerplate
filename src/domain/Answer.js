import uuidv1 from 'uuid/v1';

export const create = rightAnswer => ({
  id: uuidv1(),
  rightAnswer,
  givenAnswer: null,
  helpWasUsed: false
});

export const isValidAnswer = answer =>
  answer.rightAnswer === answer.givenAnswer;

export default { create, isValidAnswer };
