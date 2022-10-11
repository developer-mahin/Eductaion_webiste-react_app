import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const QuizItem = ({ quizItem }) => {
  const { question, correctAnswer, options } = quizItem;

  const handleCorrectEyeButton = () => {
    toast.success(`Correct and is: ${correctAnswer}`, { autoClose: 4000 });
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
      <div className="flex items-center justify-between">
        <h2
          className="text-xl text-center font-semibold mb-3 text-blue-700"
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
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          <button onClick={() => handleRadioCorrectAns(options[0])}>
            {options[0]}
          </button>
          {/* <input
            onClick={() => handleRadioCorrectAns(options[0])}
            type="radio"
            id="html"
            name="fav_language"
            value={options[0]}
          />
          <label htmlFor="html">{options[0]}</label> */}
        </p>

        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
        <button onClick={() => handleRadioCorrectAns(options[1])}>
            {options[1]}
          </button>
          {/* <input
            onClick={() => handleRadioCorrectAns(options[1])}
            type="radio"
            id="html"
            name="fav_language"
            value={options[1]}
          />
          <label htmlFor="html">{options[1]}</label> */}
        </p>
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
          {" "}
          <button onClick={() => handleRadioCorrectAns(options[2])}>
            {options[2]}
          </button>
          {/* <input
            onClick={() => handleRadioCorrectAns(options[2])}
            type="radio"
            id="html"
            name="fav_language"
            value={options[2]}
          />
          <label htmlFor="html">{options[2]}</label> */}
        </p>
        <p className="border border-blue-600 text-blue-700 font-medium p-4 rounded-xl flex items-center gap-2">
        <button onClick={() => handleRadioCorrectAns(options[3])}>
            {options[3]}
          </button>
          {/* <input
            onClick={() => handleRadioCorrectAns(options[3])}
            type="radio"
            id="html"
            name="fav_language"
            value={options[3]}
          />
          <label htmlFor="html">{options[3]}</label> */}
        </p>
      </div>
    </div>
  );
};

export default QuizItem;
