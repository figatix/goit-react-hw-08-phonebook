export const getRandomAvatar = arr => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};