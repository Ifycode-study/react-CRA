import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ events, handleEventDeleteClick }) {
  return (
    <>
        {events.map((event) => (
            //<React.Fragment key={event.id}>
            <div className={styles.card} key={event.id}>
                <h2>{event.title}</h2>
                <p>{event.location} | {event.date}</p>
                <button onClick={() => {handleEventDeleteClick(event.id)}}>Delete event</button>
            </div>
            //</React.Fragment>
        ))}
    </>
  );
}
