//firebase configuration file
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyBeBioVoLwq_MDctcKyEdgl1HIX_zxMM10",
  authDomain: "smartcity-b0826.firebaseapp.com",
  projectId: "smartcity-b0826",
  storageBucket: "smartcity-b0826.firebasestorage.app",
  messagingSenderId: "1007583281363",
  appId: "1:1007583281363:web:6816dd48fae230d1215426"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export{app, auth, db}
  