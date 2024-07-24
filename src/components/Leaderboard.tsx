import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Score } from '../store/scoreSlice';
import './Leaderboard.css';

const Leaderboard: React.FC<{ onAddScore: () => void }> = ({ onAddScore }) => {
  const scores = useSelector((state: RootState) => state.scores.scores);

  const getRankClass = (index: number) => {
    if (index === 0) return 'rank-1';
    if (index === 1) return 'rank-2';
    if (index === 2) return 'rank-3';
    return 'default-rank';
  };

  return (
    <>
      <header className="leaderboard-header">
        <h1>FASTEST OF TODAY</h1>
      </header>
      <div className="leaderboard">
        <div className="leaderboard-list">
          <ul>
            {scores.map((score: Score, index: number) => (
              <li key={index} className={`score-entry ${getRankClass(index)}`}>
                <span className="rank">{index + 1}</span>
                <span className="username">{score.username}</span>
                <span className="score">{score.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
