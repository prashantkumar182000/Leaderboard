import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './RecentEntry.css';

const RecentEntry: React.FC = () => {
  const recentEntry = useSelector((state: RootState) => {
    const scores = state.scores.scores;
    return scores[scores.length - 1];
  });

  if (!recentEntry) return null;

  return (
    <div className="recent-entry">
      <h2>Recent Entry</h2>
      <div className="entry">
        <span className="username">{recentEntry.username}</span>
        <span className="score">{recentEntry.score}</span>
        {recentEntry.amount && <span className="amount">{recentEntry.amount}</span>}
      </div>
    </div>
  );
};

export default RecentEntry;
