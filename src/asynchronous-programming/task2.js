export const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    const result = JSON.parse(jsonStr);
    successCb(result);
  } catch (err) {
    failureCb(err);
  }
};

export const successCb = result => {
  console.log('Seccess parse!');
  console.log(result);
};

export const failureCb = err => {
  console.log('Failure parse!');
  console.log(err);
};
