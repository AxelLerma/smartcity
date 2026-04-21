//firebase configuration file
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDgEdbBsdiAAaoKVMFd020ySWbmMENcq2g",
    authDomain: "smart-city-62c36.firebaseapp.com",
    projectId: "smart-city-62c36",
    storageBucket: "smart-city-62c36.firebasestorage.app",
    messagingSenderId: "854516268694",
    appId: "1:854516268694:web:2769b43b5b973e8fdd8cb7"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export{app, auth, db}
  