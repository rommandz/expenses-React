import * as firebase from 'firebase';
import { log } from 'util';

const config = {
  apiKey: 'AIzaSyCHVZUtpS35UTLqjnEAD1zMYF_CzXkxAK8',
  authDomain: 'expensify-6fb89.firebaseapp.com',
  databaseURL: 'https://expensify-6fb89.firebaseio.com',
  projectId: 'expensify-6fb89',
  storageBucket: 'expensify-6fb89.appspot.com',
  messagingSenderId: '79397468439'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database };

// const testData = [
//   {
//     name: 'Roman',
//     surname: 'Mandziuk',
//     age: 23
//   },
//   {
//     name: 'Ivan',
//     surname: 'Pypkin',
//     age: 45
//   },
//   {
//     name: 'Vasia',
//     surname: 'Kyzhudlo',
//     age: 24
//   }
// ];

// testData.forEach(el => {
//   database.ref('peoples').push(el);
// });


// database.ref('peoples').once('value')
//   .then((snapshot => {
//     const peoples = [];

//     snapshot.forEach((childSnapshot) => {
//       peoples.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(peoples);
//   }))
//   .catch((e) => {
//     console.log(e);
//   });

// // database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });

// // database.ref().update({
// //   name: 'Roma',
// //   surname: 'Mandziuk',
// //   age: 23
// // });

// //database.ref().remove();