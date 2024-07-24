import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import RecentEntry from './components/RecentEntry';
import Footer from './components/Footer';
import './App.css';
import logo from './assets/Group 9 (1).svg';

const App: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="App">
      <main>
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <button className="add-score-button" onClick={handleOpenPopup}>Add Score</button>
      </header>
      
        <Leaderboard onAddScore={handleOpenPopup} />
        <RecentEntry />
        {isPopupVisible && <AddScorePopup onClose={handleClosePopup} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
