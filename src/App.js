import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {

  const [name, setName] = useState('Maria');
  const [events, setEvents] = useState([
    {title: 'Title one', id: 1},
    {title: 'Title two', id: 2},
    {title: 'Title three', id: 3},
  ]);
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setName('Ifeoma');
  }

  const handleEventDeleteClick = (id) => {
    // setEvents(events.filter((event) => {
    //     return id !== event.id;
    // }));
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  }

  const handleClose = (bool) => {
    setShowModal(bool);
  }

  const subtitle = 'All the latest events with Maria';

  return (
    <div className="App">
      <Title title="Maria events" subtitle={subtitle}/>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <hr />
      {showEvents && (
        <div>
          <button onClick={() => {setShowEvents(false)}}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => {setShowEvents(true)}}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleEventDeleteClick={handleEventDeleteClick} />}

      <div>
        <button onClick={()=> {handleClose(true)}}>Show Modal</button>
      </div>

      {showModal && (
        <Modal handleClose={()=> {handleClose(false)}}>
        <h2>10% Off coupon code!!!</h2>
        <p>Use the coode: 0023 at checkout</p>
      </Modal>
      )}
    </div>
  );
}

export default App;
