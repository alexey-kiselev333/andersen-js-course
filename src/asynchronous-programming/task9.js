const asyncBar = async () => 'Some string';
// eslint-disable-next-line import/prefer-default-export
export const footask9 = async () => {
  const result = await asyncBar();
  console.log(result);
};
