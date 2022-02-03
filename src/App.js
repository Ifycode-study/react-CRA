import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('Maria');
  const [events, setEvents] = useState([
    {title: 'Title one', id: 1},
    {title: 'Title two', id: 2},
    {title: 'Title three', id: 3},
  ]);

  const handleClick = () => {
    setName('Ifeoma');
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
