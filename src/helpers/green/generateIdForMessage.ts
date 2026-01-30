export const generateIdForMessage = () => {
  return Date.now() + Math.floor(Math.random() * 100000) + 1;
};
