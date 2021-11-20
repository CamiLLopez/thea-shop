import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectID: process.env.REACT_APP_PROJECT_ID,
    storageButcket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

const app = initializeApp(firebaseConfig);

const getFirestoreDb = () => {
    return getFirestore(app)
}

export{
    app,
    getFirestoreDb,
}