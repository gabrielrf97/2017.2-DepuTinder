import axios from 'axios';

const HOST = 'http://localhost:8000/answers/';

export default function saveQuestionnaire(userID, questionID, questionAnswer) {
  const requestData = {
    user: userID,
    proposition: questionID,
    answerType: questionAnswer,
  };

  const request = axios.post(`${HOST}`, requestData)
  .then((response) => {
    console.log(response);
    return (response);
  })
  .catch((error) => {
    console.log(error);
    return (error);
  });
  return (request);
}
