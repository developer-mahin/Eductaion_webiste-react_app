import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import TopicItem from "./TopicItem";

const Topics = () => {
  const quizItems = useContext(TopicsContext);
  const items = quizItems.data;
  return (
    <div className="grid lg:grid-cols-4">
      {items.map((item) => (
        <TopicItem key={item.id} item={item}></TopicItem>
      ))}
    </div>
  );
};

export default Topics;
