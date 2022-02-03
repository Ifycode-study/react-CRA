import React from "react";

export default function EventList({ events, handleEventDeleteClick }) {
  return (
    <>
        {events.map((event) => (
            <React.Fragment key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => {handleEventDeleteClick(event.id)}}>Delete event</button>
            </React.Fragment>
        ))}
    </>
  );
}
