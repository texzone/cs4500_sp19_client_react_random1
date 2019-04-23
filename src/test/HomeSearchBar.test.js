import React from 'react';
import HomeSearchBar from '../components/views/HomeSearchBar';
import HomeContainer from '../components/containers/HomeContainer';
import renderer from 'react-test-renderer';

it('Render HomeSearchBar correctly', () => {
  const tree = renderer.create(
    <HomeSearchBar
    searchFn={HomeContainer.searchProviders}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
