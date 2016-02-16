import {Hero} from './hero.service';

var firebaseRef = new Firebase("https://heroesoffirebase.firebaseio.com/");

export var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
// 
// import {OpaqueToken, provide, Provider} from 'angular2/core';
// import * as Firebase from 'firebase';
// 
// export const FirebaseUrl = new OpaqueToken('FirebaseUrl');
// export const FirebaseRef = new OpaqueToken('FirebaseRef');
// 
// export const FIREBASE_PROVIDERS:any[] = [
//   provide(FirebaseRef, {
//     useFactory: (url:string) => new Firebase(url),
//     deps: [FirebaseUrl]})
// ];
// 
// export const defaultFirebase = (url: string):Provider => {
//   return provide(FirebaseUrl, {
//     useValue: url
//   });
// };
// 
// export {FirebaseList, FirebaseListConfig} from './providers/firebase_list';
// export {FirebaseObservable} from './utils/firebase_observable';
// 
// // Helps Angular-CLI automatically add providers
// export default {
//   providers: FIREBASE_PROVIDERS
// }