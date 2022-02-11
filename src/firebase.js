import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCIoe6ONIEmSxMLp2CNuXGddUpM0ekEy8k",
  authDomain: "todolist-3324b.firebaseapp.com",
  databaseURL: "https://todolist-3324b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-3324b",
  storageBucket: "todolist-3324b.appspot.com",
  messagingSenderId: "693528049654",
  appId: "1:693528049654:web:5750ef87355470d9dcb9d7",
  measurementId: "G-CKGNGER28V"
};

firebase.initializeApp(firebaseConfig);

export default firebase
