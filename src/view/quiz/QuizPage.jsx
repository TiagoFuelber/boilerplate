import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledQuizPage from './StyledQuizPage';
import Container from '../ui/Container';
import Timer from '../ui/timer/Timer';
import { addAnswer } from '../../state/quiz/actionCreators';
import { getPaginatedPeople } from '../../state/people/actionCreators';
import Button from '../ui/buttons/Button';
import PersonCard from '../ui/personCard/PersonCard';
import StyledCardsContainer from './StyledCardsContainer';

class QuizPage extends Component {
  static endGame() {
    console.log('End of time!');
  }

  componentDidMount() {
    const { getPeople } = this.props;

    getPeople(1)();
  }

  render() {
    const { addAnswer, quiz, people, getPeople } = this.props;

    return (
      <StyledQuizPage>
        <Container>
          <div className="header">
            <h1 className="center upper">Game page</h1>
            <Timer timeInSeconds={120} onEndTimer={QuizPage.endGame} />
          </div>
          <StyledCardsContainer>
            {people.list.map(person =>
              (<PersonCard key={person.name} person={person} />))}
          </StyledCardsContainer>
          {people.previous && (
            <Button
              type="button"
              onClick={getPeople(people.previous.split('').reverse()[0])}
            >
              Previous
            </Button>
          )}
          {people.next && (
            <Button
              type="button"
              onClick={getPeople(people.next.split('').reverse()[0])}
            >
              Next
            </Button>
          )}
        </Container>
      </StyledQuizPage>
    );
  }
}

const mapStateToProps = ({ quiz, people }) =>
  ({
    quiz,
    people
  });

const mapDispatchToProps = dispatch =>
  ({
    addAnswer: () =>
      dispatch(addAnswer('Luke Skywalker', 'Darth Vader')),
    getPeople: page =>
      () =>
        dispatch(getPaginatedPeople(page))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizPage);
