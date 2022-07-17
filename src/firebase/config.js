import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCMvhflim6Z-uNAH70wOR14V_fOQGox8pk",
  authDomain: "react-firebase-upload-87635.firebaseapp.com",
  projectId: "react-firebase-upload-87635",
  storageBucket: "react-firebase-upload-87635.appspot.com",
  messagingSenderId: "487737928911",
  appId: "1:487737928911:web:94712f68b3337f324d1bba",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


/**
 * Upload a file to firebase storage
 * @param {File} file the file to upload
 * @returns {Promise<string>} url of the uploaded file
 */
export async function uploadFiles(file) {
  const storaRef = ref(storage, uuid());
  await uploadBytes(storaRef, file);
  const url = await getDownloadURL(storaRef);
  return url;
}
