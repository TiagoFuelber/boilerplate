import React from 'react';
import StyledPersonCard from './StyledPersonCard';
import Button from '../buttons/Button';

const PersonCard = ({ person }) =>
  (
    <StyledPersonCard>
      <div className="buttons">
        <img src={person.image} alt={person.name} />
        <Button small>?</Button>
        <Button small>...</Button>
      </div>
    </StyledPersonCard>
  );

export default PersonCard;
