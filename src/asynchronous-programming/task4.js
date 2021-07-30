const url1 = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const url2 = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

// eslint-disable-next-line import/prefer-default-export
export function getData() {
  fetch(url1)
    .then(result => result.json())

    // eslint-disable-next-line consistent-return
    .then(({ getUsersData }) => {
      if (getUsersData) {
        return fetch(url2);
      }
    })
    .then(data => data.json())
    .then(console.log);
}
