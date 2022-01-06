import { useContext } from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengeContexts';

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn {activeChallenge.amount} xp!</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              Failed
            </button>

            <button 
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>End a cycle to receive a challenge.</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Level up by completing challenges!
        </p>
      </div>
      ) }
    </div>
  );
}