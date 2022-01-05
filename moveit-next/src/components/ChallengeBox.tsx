import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn 400 xp!</header>

          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>New challenge</strong>
            <p>Lift up and do 20 push ups</p>
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