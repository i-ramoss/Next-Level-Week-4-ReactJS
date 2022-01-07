import { useContext } from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

import { ChallengesContext } from '../contexts/ChallengeContexts';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}