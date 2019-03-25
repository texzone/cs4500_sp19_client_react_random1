import React from 'react';
import FAQSearch from '../components/views/FAQSearch';
import FAQContainer from '../components/containers/FAQContainer';
import renderer from 'react-test-renderer';

const tree = renderer.create(
  <FAQSearch
  disabled={false}
  searchFn={FAQContainer.searchFAQs}
  clearFn={FAQContainer.clearSearch}
  />
)

it('has two seperate buttons', () => {
  const tree = renderer.create(
    <FAQSearch
    disabled={false}
    searchFn={FAQContainer.searchFAQs}
    clearFn={FAQContainer.clearSearch}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
