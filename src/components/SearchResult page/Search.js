import React from "react";
import "./search.css";
import { data } from "../../landing page/events/Events";
import { EventCard } from "../../landing page/events/EventCard";
import Button from "../../Button/Button";
import { EventContainer } from "../../landing page/events/Events";
function Search() {
  return (
    <div className="search-main">
      <h1 className="events-p1">Search Results</h1>
      <div className="wine-box">
        <SearchButton para={"Category"} />
        <div className="pill">
          <Button btnClass={"wine-btn"} title={"Red Wine"} />
          <Button btnClass={"wine-btn"} title={"White Wine"} />
          <Button btnClass={"wine-btn"} title={"Rose Wine"} />
          <Button btnClass={"wine-btn"} title={"Sparkling Wine"} />
          <Button btnClass={"wine-btn"} title={"Fortified Wine"} />
          <Button btnClass={"wine-btn"} title={"Whiskey"} />
          <Button btnClass={"wine-btn"} title={"Vodka"} />
          <Button btnClass={"wine-btn"} title={"Rum"} />
          <Button btnClass={"wine-btn"} title={"Gum"} />
          <Button btnClass={"wine-btn"} title={"Tequilla"} />
        </div>
        <SearchButton para={"Filter"} />
      </div>

      <div className="events-containerb">
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
      </div>
    </div>
  );
}

export default Search;

export function SearchButton({ para }) {
  return (
    <div className="sb-main">
      <p className="sb-main-p1">{para}</p>
      <div className="colour"></div>
    </div>
  );
}
