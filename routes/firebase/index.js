// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";


//const auth = getAuth();
const userId = 'exNiGc1odYTRflvPGr8Y';

initializeApp({
  apiKey: 'AIzaSyDNYZKIlbxP1SSgfZxb77_UbkVlKxhuPyc',
  authDomain: 'mercury-hub.firebaseapp.com',
  projectId: 'mercury-hub'
});

const db = getFirestore();

export const getProjects = async () => {
  const projectsCollection = collection(db, `users/${userId}/projects`);
  const querySnapshot = await getDocs(projectsCollection);

  var data = [];
  
  querySnapshot.forEach((document) => {
    let obj = document.data();
    console.log('doc', obj)
    obj.id = document.id;
    data.push(obj);
  });

  return data;
}
