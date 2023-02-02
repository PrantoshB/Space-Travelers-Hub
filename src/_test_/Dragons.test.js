import React from 'react';
import renderer from 'react-test-renderer';
import Dragons from '../pages/Dragons';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'

it('matches snapshot', () => {
    const tree = renderer.create(
        <Provider store={store}><Dragons /></Provider>
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});