import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from '../pages/Rockets';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'

it('matches snapshot', () => {
    const tree = renderer.create(
        <Provider store={store}><Rockets /></Provider>
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});