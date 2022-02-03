import './Modal.css';

export default function Modal({ children }) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {children}
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