import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const QuizItem = ({ quizItem, index }) => {
  console.log(index);
  const { question, correctAnswer, options } = quizItem;

  const handleCorrectEyeButton = () => {
    toast.success(`Correct ans is: ${correctAnswer}`, { autoClose: 4000 });
  };

  const handleRadioCorrectAns = (ans) => {
    if (correctAnswer === ans) {
      toast.success("Correct Answer", { autoClose: 4000 });
    } else {
      toast.error("Wrong Answer", { autoClose: 4000 });
    }
  };

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 p-4 lg:p-8 shadow-md border rounded-xl mb-8">
      <div className="flex items-center justify-evenly gap-8">
        <p className="text-xl flex gap-2 font-semibold mb-3 text-blue-700 w-28">
          <span>Quiz:</span> <span>{index === 0 ? (index = 1) : index + 1}</span>
        </p>
        <h2
          className="text-xl font-semibold mb-3 text-blue-700"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>{" "}
        <button onClick={handleCorrectEyeButton}>
          <FontAwesomeIcon
            className="text-blue-700"
            icon={faEye}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <button
          onClick={() => handleRadioCorrectAns(options[0])}
          className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
        >
          {options[0]}
        </button>

        <button
          onClick={() => handleRadioCorrectAns(options[1])}
          className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
        >
          {options[1]}
        </button>
        <button
          onClick={() => handleRadioCorrectAns(options[2])}
          className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
        >
          {" "}
          {options[2]}
        </button>
        <button
          onClick={() => handleRadioCorrectAns(options[3])}
          className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2 hover:bg-blue-100"
        >
          {options[3]}
        </button>
      </div>
    </div>
  );
};

export default QuizItem;
