import React, { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocket';

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rockets);
  const { status, rockets } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);
  return (
    <div className="profile-container">
      <div className="mymissions">
        <h2>My Missions</h2>
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
      <div className="myrockets">
        <h2>My Rockets</h2>
      </div>
      <div className="mydragons">
        <h2>My Dragons</h2>
      </div>
    </div>
  );
};
export default Profile;
