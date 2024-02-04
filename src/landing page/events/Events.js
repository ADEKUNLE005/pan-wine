import React, { useState } from "react";
import "./Events.css";
function Events() {
  return (
    <div className="events-main">
      <h1 className="events-p1">New Arrivals</h1>
      <EventContainer />
      <h1 className="events-p1">Top Exotics</h1>
      <div className="events-containerb">
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />
        <EventCard image={"../../../images/Imagec.png"} />

        <div className="search">
          <p className="v-para">view more</p>
          <div className="colour"></div>
        </div>
      </div>
    </div>
  );
}

export default Events;

export function EventCard({ image, coun }) {
  const [count, setCount] = useState(false);

  const increasecount = () => {
    setCount((count) => count + 100);
  };
  function decreaseCount() {
    setCount((count) => (count > 0 ? count - 100 : count - 0));
  }
  return (
    <div className="events-card-main">
      <img src={image} alt="Event displayed" className="event-image" />
      <div className="events-card-box1">
        <p className="card-p1">Clear Springs</p>
        <p className="card-p2">Clear Springs</p>
      </div>
      <div className="events-card-box2">
        <div className="counter">
          <div className="minus" onClick={decreaseCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="#411530"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="number">100</div>
          <div className="plus" onClick={increasecount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="#411530"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="price">
          <div className="naira">₦</div>
          <div className="naira">{count}
          {count <=0 ? 0 : null}
          
          .00
          
          </div>
        </div>
      </div>
    </div>
  );
}

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
