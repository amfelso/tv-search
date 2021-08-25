import React from 'react';
import ActorCard from './ActorCard';

import { FlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => (
  <FlexGrid>
    {data.map(({ person }) => (
      <ActorCard
        key={person.id}
        name={person.name}
        county={person.country ? person.country.name : null}
        birthday={person.birthday}
        deathday={person.deathday}
        gender={person.gender}
        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
      />
    ))}
  </FlexGrid>
);

export default ActorGrid;
