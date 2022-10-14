/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRockets, getStored, updateStatus } from './Redux/Rockets/rockets';
import styles from './Rockets.module.css';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const DATA = localStorage.getItem('ROCKET_DATA');

  const getData = () => (DATA ? dispatch(getStored()) : dispatch(getRockets()));

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.rockets}>
      {rockets.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          img={item.image}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
}

function Rocket({
  id,
  name,
  description,
  img,
  reserved,
}) {
  const dispatch = useDispatch();

  return (
    <div className={styles.rocket}>
      <img src={img} alt={`The ${name} Rocket`} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>
          {reserved && <span className={styles.tag}>Reserved</span>}
          {description}
        </p>
        {!reserved
          && (
            <button
              type="button"
              className={styles.reservationBtn}
              onClick={() => dispatch(updateStatus(id))}
            >
              Reserve Rocket
            </button>
          )}
        {reserved
          && (
            <button
              type="button"
              className={styles.cancelationBtn}
              onClick={() => dispatch(updateStatus(id))}
            >
              Cancel Reservation
            </button>
          )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
