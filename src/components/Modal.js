import './Modal.css';

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleClose}>Close</button>
        </div>
    </div>
  );
}

// Props without destructuring
// export default function Modal(props) {
//     return (
//       <div className="modal-backdrop">
//           <div className="modal">
//               {props.children}
//           </div>
//       </div>
//     );
//   }