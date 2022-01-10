import { useContext } from 'react';

import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengeContexts';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/i-ramoss.png" alt="Ian Ramos" />
      <div>
        <strong>Ian Ramos</strong>
        <p>
          <img src="icons/level.svg" alt="User Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}