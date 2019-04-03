export const create = (person) => {
  const {
    name,
    height,
    mass,
    hair_color: hairColor,
    skin_color: skinColor,
    eye_color: eyeColor,
    birth_year: birthYear,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    image
  } = person;

  return ({
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    image
  });
};

export default { create };
