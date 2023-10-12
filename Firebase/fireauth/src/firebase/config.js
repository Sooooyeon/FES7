// config.js 안에 있는 프로젝트관련 값들은 매우 중요해 노출되지 않도록 환경변수를 설정한다.
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// firebase 초기화
const app = initializeApp(firebaseConfig);

// firestore 초기화
const appFireStore = getFirestore(app);

// 인증 초기화 
const appAuth = getAuth();

const timestamp = Timestamp;

export{ appFireStore, appAuth, timestamp }