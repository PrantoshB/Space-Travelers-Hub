import React, { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocket';
import { getMissionsAsync } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.rockets);
  const missionsData = useSelector((state) => state.missions);

  const { status, rockets } = data;
  const { missionsStatus, missions } = missionsData;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
      dispatch(getMissionsAsync());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(getMissionsAsync());
    }
  }, [dispatch, missionsStatus]);

  return (
    <div className="profile-container">
      <div className="mymissions">
        <h2>My Missions</h2>
        <table>
          <tbody className="profile-tbody">
            {
              missions.filter((mission) => (
                mission.isReserved === true
              )).map((mission) => (
                <tr className="profile-tr" key={mission.id}>
                  <td className="profile-td">{mission.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="myrockets">
        <h2>My Rockets</h2>
        <table>
          <tbody className="profile-tbody">
            {
              rockets.filter((rocket) => (
                rocket.reserved === true
              )).map((rocket) => (
                <tr className="profile-tr" key={rocket.id}>
                  <td className="profile-td">{rocket.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="mydragons">
        <h2>My Dragons</h2>
      </div>
    </div>
  );
};
export default Profile;
