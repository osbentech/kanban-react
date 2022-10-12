import Axios from axios;

function GetApi() {
  const getMission = () => {
      Axios.get('https://api.spacexdata.com/v3/missions').then(
        (response) => {
        console.log(response.json())
      }
    );
  };
  return (
    <div>
      <button onClick={getMission}>click to get</button>
    </div>
  )
}
export default GetApi;