import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDzdnWu7VBoAkipBXqnU0f9BlmyUPrDsb8",
    authDomain: "social-cd7fd.firebaseapp.com",
    databaseURL: "https://social-cd7fd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "social-cd7fd",
    storageBucket: "social-cd7fd.firebasestorage.app",
    messagingSenderId: "939695600486",
    appId: "1:939695600486:web:168d81b42d0cbbb3148ea7",
    measurementId: "G-V8Q4CX9FV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Analytics conditionally (client-side only)
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { analytics };
