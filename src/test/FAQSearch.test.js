import React from 'react';
import FAQSearch from '../components/views/FAQSearch';
import FAQContainer from '../components/containers/FAQContainer';
import renderer from 'react-test-renderer';

it('Render FAQSearch buttons without Search disabled', () => {
  const tree = renderer.create(
    <FAQSearch
    disabled={false}
    searchFn={FAQContainer.searchFAQs}
    clearFn={FAQContainer.clearSearch}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render FAQSearch buttons with Search disabled', () => {
  const tree = renderer.create(
    <FAQSearch
    disabled={true}
    searchFn={FAQContainer.searchFAQs}
    clearFn={FAQContainer.clearSearch}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
