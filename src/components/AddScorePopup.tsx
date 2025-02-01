import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/scoreSlice';
import './AddScorePopup.css';
import { FaUser, FaClock } from 'react-icons/fa'; // Import icons

interface AddScorePopupProps {
  onClose: () => void;
  onAddScore: (username: string, score: string) => void;
}

const AddScorePopup: React.FC<AddScorePopupProps> = ({ onClose, onAddScore }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state
  const [error, setError] = useState(''); // For error messages

  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0); // Trigger the show class after the component mounts
    return () => clearTimeout(timer);
  }, []);

  const handleAddScore = () => {
    if (!username || !score) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate the score format (MM:SS:MSS)
    const scoreRegex = /^\d{2}:\d{2}:\d{3}$/;
    if (!scoreRegex.test(score)) {
      setError('Invalid score format. Use MM:SS:MSS.');
      return;
    }

    setIsSubmitting(true); // Show loading state
    setError(''); // Clear any previous errors

    setTimeout(() => {
      dispatch(addScore({ username, score, amount: '' })); // Dispatch the Redux action
      onAddScore(username, score); // Update the recent entry in App.tsx
      setUsername('');
      setScore('');
      setIsSubmitting(false);
      closePopup();
    }, 1000); // Simulate a delay for submission
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
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="input-group">
          <FaClock className="input-icon" />
          <input
            type="text"
            value={score}
            onChange={handleScoreChange}
            placeholder="MM:SS:MSS"
            maxLength={9}
            required
          />
        </div>
        <button onClick={handleAddScore} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default AddScorePopup;