// Подключение Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDa0FAsfEfbmKftbipZsIXz5hZoW1WIQFQ",
  authDomain: "comments-aa1fb.firebaseapp.com",
  databaseURL: "https://comments-aa1fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "comments-aa1fb",
  storageBucket: "comments-aa1fb.firebasestorage.app",
  messagingSenderId: "699556396912",
  appId: "1:699556396912:web:56138d1dabf9d16d67d9b5",
  measurementId: "G-CMH8HNQK5L"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Функция добавления комментариев
async function addComment(username, text) {
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      username,
      text,
      timestamp: new Date()
    });
    console.log("Комментарий добавлен с ID: ", docRef.id);
  } catch (e) {
    console.error("Ошибка добавления комментария: ", e);
  }
}

// Функция загрузки комментариев
async function getComments() {
  const querySnapshot = await getDocs(collection(db, "comments"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export { addComment, getComments };
