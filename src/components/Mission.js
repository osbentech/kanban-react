import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMissions } from "./Redux/Mission/missions";

function Mission() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [])
  const missions = useSelector((state) => state.missions);
  return (
    <div className="table">
      <div className="table-headers">
        <h2 className="name">Mission</h2>
        <h2 className="des">Description</h2>
        <h2 className="status">Status</h2>
      </div>
      {missions.map((item, index) => {
        return (
          <div className="mission" key={index + 1}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button type="button">Join mission</button>
            <button type="button">Leave mission</button>
          </div>
        );
      })}
    </div>
  )
}
export default Mission;