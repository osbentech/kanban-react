/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, getStored, updateStatus } from './Redux/Rockets/rockets';
import PropTypes from 'prop-types';
import styles from './Rockets.module.css';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const DATA = localStorage.getItem('ROCKET_DATA');

  const getData = () => {
    return DATA ? dispatch(getStored()) : dispatch(getRockets());
  };

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
};

function Rocket({
  id,
  name,
  description,
  img,
  reserved,
}) {
  const dispatch = useDispatch();

  const btnText = (!reserved) ? 'Reserve Rocket' : 'Cancel Reservation';

  const btnStyle = (reserved) ? {
    backgroundColor: 'transparent',
    color: '#858b92',
    border: '1px solid #858b92',
  }
    : {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
    };

  const tagStyle = (reserved) ? { display: 'inline' } : { display: 'none' };

  return (
    <div className={styles.rocket}>
      <img src={img} alt={`The ${name} Rocket`} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>
          <span style={tagStyle} className={styles.tag}>Reserved</span>
          {description}
        </p>
        <button
          onClick={() => dispatch(updateStatus(id))}
          type="button"
          style={btnStyle}
        >
          {btnText}
        </button>
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
}
