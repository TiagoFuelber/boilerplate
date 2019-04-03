import React from 'react';
import { connect } from 'react-redux';
import StyledBasePage from '../ui/styles/StyledBasePage';
import Container from '../ui/Container';
import LinkButton from '../ui/buttons/LinkButton';

const StartPage = () =>
  (
    <StyledBasePage>
      <Container>
        <h1 className="center upper">Starquiz</h1>
        <h2 className="center">Let&apos;s find out how geeky you are.</h2>
        <h2>How to play:</h2>
        <p>
          It&apos;s a race against the time. You only have{' '}
          <span className="yellow">two minutes</span> to show how many Star Wars
          characters you know.
        </p>
        <p>You only have the picture of the character to help you.</p>
        <p>
          Use the <span className="yellow bold">?</span> button to submit your
          answer. Each right answer will give you{' '}
          <span className="yellow">10 points</span>.
        </p>
        <p>
          The goal here is to make as much points as possible and get at the top
          of the ranking.
        </p>
        <p>
          Use the <span className="yellow bold">...</span> button to get some
          helping info about the character,{' '}
          <span className="yellow"> but beware </span>, using this feature will
          make you get only <span className="yellow">5 points</span> on this
                              character. Use it with wisdom!
        </p>
        <h2>Are you ready?</h2>
        <p>So may the force be with you!!</p>
        <LinkButton to="/quiz" width="100%" className="upper">
          Play!!
        </LinkButton>
      </Container>
    </StyledBasePage>
  );

const mapStateToProps = ({ quiz }) =>
  ({ quiz });

export default connect(mapStateToProps, null)(StartPage);
