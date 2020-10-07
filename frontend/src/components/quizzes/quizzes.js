import React from "react";
import quizzesCSS from './quizzes.scss'

class NewQuizzes extends React.Component {

    render() {
        return (
            <div>
                <div className="new-quizzes-div">
                    {/* <img className="hands-img" src={hands}></img> */}
                    <div className="new-quizzes-directory">
                        <h1 className="new-quizzes-header">New quizzes:</h1>
                        <div className="new-quizzes-links">
                            <div>Quiz Title 1</div>
                            <div>Quiz Title 2</div>
                            <div>Quiz Title 3</div>
                            <div>Quiz Title 4</div>
                            <div>Quiz Title 5</div>
                            <div>Quiz Title 6</div>
                            <div>Quiz Title 7</div>
                            <div>Quiz Title 8</div>
                            <div>Quiz Title 9</div>
                            <div>Quiz Title 10</div>
                            <div>Quiz Title 11</div>
                            <div>Quiz Title 12</div>
                            <div>Quiz Title 13</div>
                            <div>Quiz Title 14</div>
                            <div>Quiz Title 15</div>
                            <div>Quiz Title 16</div>
                            <div>Quiz Title 17</div>
                        </div>
                    </div>

                    <div className="quiz-form-box">
                        <h1 className="quiz-form-header">Quiz Title:</h1>
                        <div className="quiz-form">
                            <div>Question 1</div>
                            <div>Question 2</div>
                            <div>Question 3</div>
                            <div>Question 4</div>
                            <div>Question 5</div>
                            <div>Question 6</div>
                            <div>Question 7</div>
                            <div>Question 8</div>
                            <div>Question 9</div>
                            <div>Question 10</div>
                            <div>Question 11</div>
                            <div>Question 12</div>
                            <div>Question 13</div>
                            <div>Question 14</div>
                            <div>Question 15</div>
                            <div>Question 16</div>
                            <div>Question 17</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewQuizzes;