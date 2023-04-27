import React from 'react'
import {useLocation} from 'react-router-dom'
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import './HomeMainbar.css'

import QuestionList from './QuestionList'


const HomeMainbar = () => {
    const location= useLocation()
const user=1;
    const navigate= useNavigate()

    const questionsList = useSelector((state) => state.questionsReducer);

    
    
   /* var questionsList=[{
        _id:1,
        //votes:0,
        upVotes:3,
        downVotes:2,
        noOfAnswers: 2,
       questionTitle:"What is a function?",
       questionBody:"It meant to be",
       questionTags :["java","node js","react js","mongo db"],
       userPosted: " Shruti",
       userId:1,
       askedOn: "Apr 18",
       answer: [{answerBody: "Answer", userAnswered:" John",answeredOn:"Apr 20", userId:2 }]
},{
    _id:2,
    //votes:0,
    upVotes:3,
        downVotes:2,
    noOfAnswers: 0,questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags :["javascript","R","python"],
    userPosted: " Shruti",
    userId:2,
    askedOn: "Apr 17",
    answer: [{answerBody: "Answer", userAnswered:" John",answeredOn:"Apr 20", userId:2 }]
 },
    {_id:3,
        //votes:0,
    upVotes:3,
    downVotes:2,
     noOfAnswers: 0,
    questionTitle:"What is a function?",
    questionBody:"It meant to be",
    questionTags :["javascript","R","python"],
    userPosted: " Shruti",
   userId:3,
     askedOn: "Apr 18",
    answer: [{answerBody: "Answer", userAnswered:" Zaaya",answeredOn:"Apr 20", userId:4 }]
},{ _id:4,
    //votes:0,
    upVotes:3,
    downVotes:0,
    noOfAnswers: 2,
   questionTitle:"Have you completed your home work yet?",
   questionBody:"It meant to be",
   questionTags :["javascript","R","python"],
   userPosted: " Shruti",
   userId:4,
   askedOn: "Apr 19",
   answer: [{answerBody: "Answer", userAnswered:" Shruti",answeredOn:"Apr 20", userId:1 }]
},{_id:5,
    //votes:0,
    upVotes:1,
    downVotes:1,
    noOfAnswers: 1,
   questionTitle:"Is there anyone who can solve this error?",
   questionBody:"It meant to be",
   questionTags :["javascript","R","python","react js"],
   userPosted: " Shruti",
   userId:5,
   askedOn: "Apr 19",
   answer: [{answerBody: "Answer", userAnswered:" John",answeredOn:"Apr 20", userId:2 }]
}]*/


const checkAuth=() =>{
        if(user===null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }
    }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
            location.pathname=== '/'? <h1> Top Questions</h1> : <h1>All Questions</h1>
        }
        <button  onClick={checkAuth} className='ask-btn'> Ask Question </button>
        </div>
        <div>
        {
        questionsList.data === null ?
        <h1>Loading...</h1> :
        <>
        <p>{ questionsList.data.length} questions</p>
        <QuestionList questionsList= {questionsList.data}/>
          </>
     }
        </div>

</div>
  )
}

export default HomeMainbar