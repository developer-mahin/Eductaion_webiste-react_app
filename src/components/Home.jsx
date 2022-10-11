import React, { useContext } from "react";
import { TopicsContext } from "./Root";
import TopicItem from '../components/TopicItem'
import Banner from "./Banner";


const Home = () => {
  const topicsItems = useContext(TopicsContext);
  const topics = topicsItems.data;

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="grid lg:grid-cols-4">
        {topics.map((item) => (
          <TopicItem key={item.id} item={item}></TopicItem>
        ))}
      </section>
    </div>
  );
};

export default Home;
