import axios from 'axios';

const HOST = 'http://localhost:8000/users';

export function saveQuestionnaire(questionnaireId){
  const requestData = {
    id: questionnaireId,
  };
  const request = axios.post(`${HOST}sendData`, requestData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
