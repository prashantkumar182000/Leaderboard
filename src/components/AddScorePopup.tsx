import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/scoreSlice';
import './AddScorePopup.css';

const AddScorePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0); // Trigger the show class after the component mounts
    return () => clearTimeout(timer);
  }, []);

  const handleAddScore = () => {
    if (username && score) {
      dispatch(addScore({ username, score, amount: '' })); // Provide a default value for amount
      setUsername('');
      setScore('');
      closePopup();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 9) value = value.slice(0, 9);
    value = value.replace(/(\d{2})(\d{2})(\d{3})/, '$1:$2:$3');
    setScore(value);
  };

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(onClose, 1000); // Wait for the animation to complete before closing
  };

  return (
    <div className={`add-score-popup ${isVisible ? 'show' : 'hide'}`} ref={popupRef}>
      <div className="popup-content">
        <h2>Add Score</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Score (MM:SS:MSS):
          <input
            type="text"
            value={score}
            onChange={handleScoreChange}
            maxLength={9}
            placeholder="MM:SS:MSS"
          />
        </label>
        <button onClick={handleAddScore}>Submit</button>
      </div>
    </div>
  );
};

export default AddScorePopup;
