import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAsync } from '../../redux/missions/missions';
import Badge from '../Badge';
import './style.css';

const MissionsTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missions);
  const { status, missions } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMissionsAsync());
    }
  }, [dispatch, status]);

  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col" aria-label="empty-th" />
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => {
            const { id, name, description } = mission;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td><Badge text="Not a member" /></td>
                <td>
                  <button type="button">Join Mission</button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default MissionsTable;
