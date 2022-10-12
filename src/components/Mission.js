

// const Mission = () => {

//     return(
//         <></>
//     )
// }

// export default Mission;
import React from "react";
import Axios from 'axios';

function Mission() {
  const getMission = () => {
      Axios.get('https://api.spacexdata.com/v3/missions').then(
        (response) => {
        console.log(response)
      }
    );
  };
  return (
    <div>
      <button onClick={getMission}>click to get</button>
    </div>
  )
}
export default Mission;