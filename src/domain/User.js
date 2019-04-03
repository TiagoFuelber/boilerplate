export const create = userAttributes => ({
  id: userAttributes.id,
  name: userAttributes.name,
  email: userAttributes.email
});

export default { create };
