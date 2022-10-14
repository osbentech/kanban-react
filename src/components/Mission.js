/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, getStoredMissions, updateStatus } from './Redux/Mission/missions';
import styles from './Mission.module.css';

function Missions() {
  const dispatch = useDispatch();
  const data = localStorage.getItem('mission_Data');
  const getMissionsData = () => (data ? dispatch(getStoredMissions()) : dispatch(getMissions()));

  useEffect(() => {
    getMissionsData();
  }, []);

  const missions = useSelector((state) => state.missions);
  return (
    <div className={styles.table}>
      <div className={styles.tableHeaders}>
        <h2 className={styles.name}>Mission</h2>
        <h2 className={styles.des}>Description</h2>
        <h2 className={styles.status}>Status</h2>
        <p className={styles.empty} />
      </div>
      {missions.map((item) => (
        <Mission
          name={item.name}
          id={item.id}
          key={item.id}
          reserved={item.reserved}
          description={item.description}
        />
      ))}
    </div>
  );
}

function Mission({
  name,
  id,
  description,
  reserved,
}) {
  const dispatch = useDispatch();

  return (

    <div className={styles.mission}>
      <h2>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.tagContainer}>
        {!reserved && <p className={styles.tag}>NOT A MEMBER</p>}
        {reserved && <p className={styles.activeTag}>Active member</p>}
      </div>
      <div className={styles.btnContainer}>
        {!reserved &&
          (<button
            type="button"
            className={styles.joinBtn}
            onClick={() => dispatch(updateStatus(id))}
          >
            Join Mission
          </button>)}
        {reserved &&
          (<button
            type="button"
            className={styles.cancelBtn}
            onClick={() => dispatch(updateStatus(id))}
          >
            Leave Mission
          </button>)}
      </div>
    </div>
  );
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Missions;
