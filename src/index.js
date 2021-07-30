import { createCb, foo } from './asynchronous-programming/task1';
import { failureCb, parseJSON, successCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';

import { getData } from './asynchronous-programming/task4';
// eslint-disable-next-line import/named
// import { consistLoad, parallelLoad } from './asynchronous-programming/task5';

//
// import { getResolvedPromise } from './asynchronous-programming/task6';
// import {footask7} from "./asynchronous-programming/task7";
// import {footask8} from "./asynchronous-programming/task8";
// import {footask9} from "./asynchronous-programming/task9";
// import {Musician} from "./asynchronous-programming/task10";

foo(10, createCb('cb'));

parseJSON('{"x" : 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

delay(100).then(value => console.log(`Done with ${value}`));

getData();

// parallelLoad();
// consistLoad();

//
// const resolve = value => {
//   if (value > 300) {
//     throw new Error('Ошибка');
//   }
//   console.log(value);
//   return value;
// };
// getResolvedPromise(500)
//   .then(resolve)
//   .catch(console.log)
//   .finally(() => console.log('This is Finaly'));

// footask7();
//
// footask8('https://jsonplaceholder.typicode.com/users');

// footask9();

// const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
// musician.getAlbums().then(albums => console.log(albums));
