import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebaseCred from "./utils/firebaseCred";

const firebaseConfig = {
  apiKey: firebaseCred.apiKey,
  authDomain: firebaseCred.authDomain,
  databaseURL: firebaseCred.databaseURL,
  projectId: firebaseCred.projectId,
  storageBucket: firebaseCred.storageBucket,
  messagingSenderId: firebaseCred.messagingSenderId,
  appId: firebaseCred.appId,
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
