import PeopleRepository from './infra/PeopleRepository';
import makeGetPaginatedPeople from './application/getPaginatedPeople';
import makeGetPersonImage from './application/getPersonImage';

const getPaginatedPeople = makeGetPaginatedPeople({ PeopleRepository });

const getPersonImage = makeGetPersonImage({ PeopleRepository });

export { getPaginatedPeople, getPersonImage };
