import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {toast} from 'react-toastify'

const QuizItem = ({ quizItem }) => {
  const { question, correctAnswer, options } = quizItem;

  const handleShowCorrect = () => {
    toast.success(`Correct and is: ${correctAnswer}`, {autoClose: 4000})
  };

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 p-4 lg:p-8 shadow-md border rounded-xl mb-8">
      <div className="flex items-center justify-between">
        <h2
          className="text-xl text-center font-semibold mb-3 text-blue-700"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>{" "}
        <button onClick={handleShowCorrect}>
          <FontAwesomeIcon
            className="text-blue-700"
            icon={faEye}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          <input type="radio" className="accent-pink-500" /> {options[0]}
        </p>
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          {" "}
          <input type="radio" className="accent-pink-500" />
          {options[1]}
        </p>
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          {" "}
          <input type="radio" className="accent-pink-500" />
          {options[2]}
        </p>
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          {" "}
          <input type="radio" className="accent-pink-500" />
          {options[3]}
        </p>
      </div>
    </div>
  );
};

export default QuizItem;
