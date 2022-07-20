
		// Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
        // Follow this pattern to import other Firebase services
        // import { } from 'firebase/<service>';
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyCczPOyGMt-0BM7USIlxM3HxhZoVcAeRrk",
        authDomain: "done-dirt-cheap-by-tnt.firebaseapp.com",
        databaseURL: "https://done-dirt-cheap-by-tnt-default-rtdb.firebaseio.com",
        projectId: "done-dirt-cheap-by-tnt",
        storageBucket: "done-dirt-cheap-by-tnt.appspot.com",
        messagingSenderId: "626830894166",
        appId: "1:626830894166:web:de8b38db31dd3bece207f7",
        measurementId: "G-R1904FDQ15"
        };
        
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const analytics = getAnalytics(app);
        
        function sendRequest() {
            alert("hello")
        }