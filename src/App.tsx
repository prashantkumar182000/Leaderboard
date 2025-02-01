import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import RecentEntry from './components/RecentEntry';
import Footer from './components/Footer';
import './App.css';
import logo from './assets/Group 9 (1).svg';

const App: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [recentEntry, setRecentEntry] = useState<{ username: string; score: string } | null>(null);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleAddScore = (username: string, score: string) => {
    setRecentEntry({ username, score }); // Update the recent entry
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <button className="add-score-button" onClick={handleOpenPopup}>Add Score</button>
      </header>
      <main>
        <Leaderboard onAddScore={handleOpenPopup} />
        <RecentEntry recentEntry={recentEntry} />
        {isPopupVisible && (
          <AddScorePopup
            onClose={handleClosePopup}
            onAddScore={handleAddScore} // Pass the handleAddScore function
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;