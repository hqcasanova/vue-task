import { initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider } from 'firebase/app-check';
import {
  getFirestore,
  collection,
  type DocumentData,
  doc,
  QueryDocumentSnapshot,
  type SnapshotOptions,
} from 'firebase/firestore';
import { VueFireAppCheck, firestoreDefaultConverter } from 'vuefire';
import Task from '@/models/Task';

const firebaseConfig = {
  apiKey: 'AIzaSyDH-zRNSWlF0LmZxKT448JfgVa7bVHUlk0',
  authDomain: 'vue-task-a4125.firebaseapp.com',
  projectId: 'vue-task-a4125',
  storageBucket: 'vue-task-a4125.appspot.com',
  messagingSenderId: '923241385029',
  appId: '1:923241385029:web:635185b731110c80c2272c',
};

const converter = {
  toFirestore: firestoreDefaultConverter.toFirestore,

  fromFirestore: (
    snapshot: QueryDocumentSnapshot<Task, DocumentData>,
    options: SnapshotOptions
  ) => {
    const data = firestoreDefaultConverter.fromFirestore(snapshot, options);
    return new Task(data as Task);
  },
};

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const taskListRef = collection(db, 'tasks').withConverter<Task, DocumentData>(converter);
export const taskDocRef = (id: string) =>
  doc(db, 'tasks', id).withConverter<Task, DocumentData>(converter);

export const fireAppCheck = VueFireAppCheck({
  provider: new ReCaptchaV3Provider('6LdInk0nAAAAAEKsjNfbVhbBN50XWvVZSuqn9IsV'),
  debug: import.meta.env.DEV,
  isTokenAutoRefreshEnabled: true,
});
