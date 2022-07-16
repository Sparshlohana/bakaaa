import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-performance.js";
import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-remote-config.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAqfoxC3oROR-ioBRPPA15pW6Mh_zqpVco",
    authDomain: "bakaaa-3343d.firebaseapp.com",
    projectId: "bakaaa-3343d",
    storageBucket: "bakaaa-3343d.appspot.com",
    messagingSenderId: "1058339491574",
    appId: "1:1058339491574:web:0ae5dc359354f7bff066d7",
    measurementId: "G-VEQL7DZXL4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(firebaseConfig);



remoteConfig.settings = {
    fetchTimeMillis: 60000,
    minimumFetchIntervalMillis: 1,
  };

remoteConfig.defaultConfig = {
    test: 'Not Working',
  };
 fetchAndActivate(remoteConfig)
  .then(() => {
    const anno = getValue(remoteConfig, "test").asString();
    if(anno){
        console.log(anno)
    }
  })
  .catch((err) => {
    console.log(err);
  });