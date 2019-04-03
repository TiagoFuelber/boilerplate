export default ({ validateUser, userRepository }) => async (
  userData,
  { onSuccess, onError, onValidationError }
) => {
  if (!validateUser(userData)) {
    return onValidationError(new Error('Invalid user'));
  }

  try {
    const user = await userRepository.add(userData);
    onSuccess(user);
  } catch (error) {
    onError(error);
  }
};
