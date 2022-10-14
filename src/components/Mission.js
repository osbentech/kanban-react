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
  const btnText = (!reserved) ? 'Join Mission' : 'Leave Mission';
  const statusTxt = (!reserved) ? 'NOT A MEMBER' : 'Active member';

  const btnStyle = (reserved) ? {
    backgroundColor: 'transparent',
    color: '#dc3645',
    border: '1px solid #dc3645',
  }
    : {
      backgroundColor: 'transparent',
      color: '#343a40',
      border: '1px solid #343a40',
    };

  const tagStyle = (reserved) ? { backgroundColor: '#18a2b8' } : { backgroundColor: '#6d757d' };

  return (

    <div className={styles.mission}>
      <h2>{name}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.tagContainer}>
        <p style={tagStyle} className={styles.tag}>{statusTxt}</p>
      </div>
      <div className={styles.btnContainer}>
        <button
          style={btnStyle}
          type="button"
          className={styles.missionBtn}
          onClick={() => dispatch(updateStatus(id))}
        >
          {btnText}
        </button>
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
