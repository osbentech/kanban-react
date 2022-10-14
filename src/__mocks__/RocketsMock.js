/* eslint-disable*/
import styles from './Rockets.module.css';

function getRockets() {
  return (
    [
      {
        id: 1,
        name: "Falcon 1",
        description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
        image: "https://imgur.com/DaCfMsj.jpg",
        reserved: false
      },
      {
        id: 2,
        name: "Falcon 9",
        description: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
        image: "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
        reserved: false
      },
      {
        id: 3,
        name: "Falcon Heavy",
        description: "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
        image: "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
        reserved: false
      },
      {
        id: 4,
        name: "Starship",
        description: "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
        image: "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
        reserved: false
      }
    ]
  )
}

export default function Rockets() {

  const Data = getRockets();

  return (
    <div className={styles.rockets}>
      {Data.map((item) => (
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
          type="button"
          style={btnStyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export { getRockets };
