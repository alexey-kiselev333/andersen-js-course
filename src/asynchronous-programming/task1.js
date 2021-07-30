export const foo = (x, cb) => {
  if (x <= 10) {
    console.log('x <= 10');
  } else {
    console.log('x > 10');
    cb();
  }
};

export const createCb = str => {
  return () => console.log(str);
};
