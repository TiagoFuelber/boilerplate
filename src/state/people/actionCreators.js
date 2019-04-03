import { PEOPLE } from '../actionTypes';
import * as Person from '../../domain/Person';

export const updatePeople = data =>
  ({
    type: PEOPLE.UPDATE,
    data
  });

export const getPaginatedPeople = page =>
  (dispatch, getState, container) => {
    container.getPaginatedPeople(page, {
      onSuccess: async (data) => {
        const mappedPeople = data.results.map(person =>
          Person.create(person));

        const getImages = async () =>
          Promise.all(
            mappedPeople.map(
              async person =>
                ({ ...person, image: await container.getPersonImage(person.name) })
            )
          );

        const mappedPeopleWithImages = await getImages();
        console.log(mappedPeopleWithImages);

        dispatch(updatePeople({ ...data, results: mappedPeopleWithImages }));
      }
    });
  };

export default { getPaginatedPeople };
