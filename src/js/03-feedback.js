import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form  input');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextareaInput, 500));

let formData = { email: '', message: '' };

function onTextareaInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateTextarea();

/*
 - Останавливаем поведение по умолчанию
 - Убираем сообщение из хранилища
 - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  formData = { email: '', message: '' };
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 - Получаем значение из хранилища
 - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);

    formData = parsedMessage;

    inputRef.value = parsedMessage.email;
    textareaRef.value = parsedMessage.message;
    if (parsedMessage.email === undefined) {
      return (inputRef.value = '');
    }
    if (parsedMessage.message === undefined) {
      return (textareaRef.value = '');
    }
  }
}
