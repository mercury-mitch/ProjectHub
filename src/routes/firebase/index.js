// Initialize Cloud Firestore through Firebase
import { initializeApp }               from "firebase/app"
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, 
         collection, 
         getDocs, 
         setDoc,
         addDoc }                         from "firebase/firestore"; 


const userId = sessionStorage.getItem('x-merc-jspx-sn');

// Redirect user to login page
if (!userId) {
  window.location.replace(window.location.origin + '/login')
}

initializeApp({
  apiKey: 'AIzaSyDNYZKIlbxP1SSgfZxb77_UbkVlKxhuPyc',
  authDomain: 'mercury-hub.firebaseapp.com',
  projectId: 'mercury-hub'
});

const db = getFirestore();

export const GET = async route => {
  const targetCollection = collection(db, `users/${userId}/${route}`);
  
  const querySnapshot = await getDocs(targetCollection);
  
  var data = [];
  
  querySnapshot.forEach((document) => {
    let obj = document.data();
    obj.id = document.id;
    data.push(obj);
  });
  
  return data;
}

export const POST = async (route, payload) => {
  await addDoc(collection(db, `users/${userId}/${route}`), payload);
  
  return payload;
}

export const PUT = async (route, payload) => {
  const docRef = collection(db, 'users/' + userId + route);
  const request = await setDoc(docRef, payload, { merge: true });
  request.then(response => {
    return response;
  })

}

export const MercuryHub = {
  GET,
  POST,
  PUT
}
