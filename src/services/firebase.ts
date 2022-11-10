import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAq_EMJtpajz3dxCpKXdsaCzSA4nCp6uQE",
    authDomain: "twitter-storybook.firebaseapp.com",
    projectId: "twitter-storybook",
    storageBucket: "twitter-storybook.appspot.com",
    messagingSenderId: "774209508602",
    appId: "1:774209508602:web:16ef375729c8ba42b32543"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)