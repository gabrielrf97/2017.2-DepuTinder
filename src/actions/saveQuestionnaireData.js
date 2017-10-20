import axios from 'axios';

const HOST = 'http://localhost:8000/usersPost/';

export default function saveQuestionnaire(questionnaireId) {
  const requestData = {
    userName: 'Amanda',
    userEmail: 'amandalust@gmail.com',
    userPassword: 'rolezinho',
    userImage: '',
    answeredQuestions: questionnaireId,
  };

  const request = axios.post(`${HOST}`, requestData)
  .then((response) => {
    return (response);
  })
  .catch((error) => {
    return (error);
  });
  return (request);
}
