import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizItem from "./QuizItem";

const Quiz = () => {
  const quiz = useLoaderData().data.questions;
  const quizTopicName = useLoaderData().data;

  return (
    <div>
      <h2 className="text-4xl text-center text-blue-700 font-semibold lg:py-8">
        Quiz of {quizTopicName.name}
      </h2>
      <div className="p-4 md:p-8 w-full md:w-8/12 m-auto">
        {quiz.map((quizItem, index) => (
          <QuizItem
            key={quizItem.id}
            quizItem={quizItem}
            index={index}
          ></QuizItem>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
