import { addComment, getComments } from "./firebase.js";

// Добавляем тестовый комментарий
addComment("User1", "Это тестовый комментарий!");

// Загружаем все комментарии из базы
getComments();
