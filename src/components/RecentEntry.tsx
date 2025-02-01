import React from 'react';
import './RecentEntry.css';

interface RecentEntryProps {
  recentEntry: { username: string; score: string } | null;
}

const RecentEntry: React.FC<RecentEntryProps> = ({ recentEntry }) => {
  if (!recentEntry) return null;

  return (
    <div className="recent-entry">
      <h2>Recent Entry</h2>
      <div className="entry">
        <span className="username">{recentEntry.username}</span>
        <span className="score">{recentEntry.score}</span>
      </div>
    </div>
  );
};

export default RecentEntry;