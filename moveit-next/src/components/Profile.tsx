import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/i-ramoss.png" alt="Ian Ramos" />
      <div>
        <strong>Ian Ramos</strong>
        <p>
          <img src="icons/level.svg" alt="User Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}