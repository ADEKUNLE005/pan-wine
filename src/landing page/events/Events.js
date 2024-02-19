import React from "react";
import { EventCard } from "./EventCard";
import "./Events.css";
export const data = [
  {
    id: "1",
    name: "food 1",
    amount: 1200,
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imageb.png",
    qty: 1,
  },

  {
    id: "2",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "3",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "4",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "5",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "6",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "7",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "8",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "9",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "10",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "11",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "12",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "13",
    name: "food 1",
    amount: 1200,
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "14",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },

  {
    id: "15",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: 1,
  },
  {
    id: "16",
    name: "food 1",
    amount: "1200",
    title: "Clear springs",
    description: "Clear springs",
    image: "/images/Imagec.png",
    qty: "1",
  },
];

function Events() {

  return (
    <div className="events-main">
      <h1 className="events-p1">New Arrivals</h1>
      <div className="events-containerb">
        {data?.map((item) => {
          return (
            <EventCard
              image={item.image}
              amount={item.amount}
              title={item.title}
              description={item.description}
              qty={item.qty}
              ite={item}
            />
          );
        })}
      </div>
      <h1 className="events-p1">Top Exotics</h1>
      <div className="events-containerb">
        {/* <EventCard image={""} /> */}
        {data.map((item) => {
          return (
            <EventCard
              image={item.image}
              amount={item.amount}
              title={item.title}
              description={item.description}
              qty={item.qty}
              ite={item}
            />
          );
        })}

        <div className="search">
          <p className="v-para">view more</p>
          <div className="colour"></div>
        </div>
      </div>
    </div>
  );
}

export default Events;

export function EventContainer() {
  return (
    <div className="events-container">
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imageb.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
      <EventCard image={"../../../images/Imagec.png"} />
    </div>
  );
}


