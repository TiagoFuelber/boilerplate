export const secondsToMinutes = seconds =>
  `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)}`;

export default {
  secondsToMinutes
};
