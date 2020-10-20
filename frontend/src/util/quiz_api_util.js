import axios from 'axios';
import { login } from './session_api_util';


export const fetchQuizQuestion = (questionId) => {
    console.log("hit question util get question id is:" + questionId)
    return axios.get(`/api/quizzes/${questionId}`); 
}
    
export const updateQuizQuestion = (questionId,
     quizNum, 
     choice,
     age, 
     education, 
     politicalLeaning, 
     religiousAffilation,
     gender,
     ethnicity,
     petChoice,
     location) => {    
     axios({
        method: 'patch',
        url: `/api/quizzes/update/${questionId}`,
        data: {
            quizNum: quizNum,
            choice: choice, 
            age: age, 
            education: education, 
            politicalLeaning: politicalLeaning, 
            religiousAffilation: religiousAffilation, 
            gender: gender, 
            ethnicity: ethnicity, 
            petChoice: petChoice, 
            location: location
        }
     });
 }

 export const createQuestion = (_id,
    quizNum, 
    text,
    choiceAText, 
    choiceBText,) => {    
    axios({
       method: 'post',
       url: "/api/quizzes/createQuiz",
       data: {
           quizNum: quizNum,
           _id: _id, 
           text: text, 
           choiceAText: choiceAText, 
           choiceBText: choiceBText, 
       }
    });
}


export const getFirstQuestion = (id) => {
    return axios.get(`/api/quizzes/${id}/first`);
};

export const fetchQuestion = (id) => {
    return axios.get(`/api/quizzes/${id}`)
}

export const fetchAllQuestionsFromAQuiz = (promptId) => {
    
    return axios.get(`/api/prompts/${promptId}`)
}

export const fetchTotalNumberOfQuizzes= () => {
    return axios.get("/api/quizzes/")
}