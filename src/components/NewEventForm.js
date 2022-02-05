import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('remote');

    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('remote');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }

        addEvent(event);
        resetForm();
    }

    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title: {title} </span>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date: {date} </span>
                <input 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Event Location: </span>
                <select onChange={(e) => {setLocation(e.target.value)}}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    );
}



//Using use ref:
// import { useRef } from 'react';
// import './NewEventForm.css';
// export default function NewEventForm({ addEvent }) {
//     const title = useRef();
//     const date = useRef();

//     const resetForm = () => {
//        title.current.value = '';
//        date.current.value = '';
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const event = {
//             title: title.current.value,
//             date: date.current.value,
//             id: Math.floor(Math.random() * 10000)
//         }

//         addEvent(event);
//         resetForm();
//     }

//     // const handleChange = (e) => {
//     //     setTitle(e.target.value);
//     // }

//     return (
//         <form className="new-event-form" onSubmit={handleSubmit}>
//             <label>
//                 <span>Event Title: </span>
//                 <input 
//                     type="text" 
//                     ref={title}
//                 />
//             </label>
//             <label>
//                 <span>Event Date: </span>
//                 <input 
//                     type="date" 
//                     ref={date}
//                 />
//             </label>
//             <button>Submit</button>
//             <p onClick={resetForm}>Reset form</p>
//         </form>
//     );
// }
