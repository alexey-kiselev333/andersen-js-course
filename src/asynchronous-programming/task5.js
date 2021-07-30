const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];
// eslint-disable-next-line import/prefer-default-export
export const parallelLoad = async () => {
  const promises = urls.map(item => {
    return fetch(item);
  });
  const response = await Promise.all(promises);
  response.forEach(item => item.json().then(data => console.log(data)));
};

export const consistLoad = async () => {
  const promises = urls.map(item => {
    return fetch(item);
  });

  // eslint-disable-next-line no-restricted-syntax
  for await (const result of promises) {
    console.log(await result.json());
  }
};
