import './App.css';
import Modal from './Components/Modal';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      {modalOpen && <Modal />}
      <h1>Click the button</h1>
      <button
        className='openModalBtn'
        onClick={()=> setModalOpen(true)}
      >
        Open
      </button>
    </div>
  );
}

export default App;
