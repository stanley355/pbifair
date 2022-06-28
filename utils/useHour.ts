export const useHour = () => {
  const date = new Date();
  const currentHour = date.getHours() + 1;

  if (currentHour >= 12 && currentHour <= 18) {
    return true;
  }

  return false;
};
