import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const resRockets = rockets.filter((rocket) => rocket.reserved);
  const resMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={styles.myProfile}>
      <div className={styles.missions}>
        <h2>Missions</h2>
        <div className={styles.missionList}>
          {resMissions.map((mission) => (
            <p key={mission.id}>{mission.name}</p>
          ))}
        </div>
      </div>
      <div className={styles.rockets}>
        <h2>Rockets</h2>
        <div className={styles.rocketList}>
          {resRockets.map((rocket) =>
          (
            <p key={rocket.id}>{rocket.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
