import React from 'react';
import FAQTable from '../components/views/FAQTable';
import FAQContainer from '../components/containers/FAQContainer';
import renderer from 'react-test-renderer';
import faqData from '../mock/data/faq.mock.json';



it('Render FAQTable page 1, 10 items/page', () => {
    const tree = renderer.create(
        <FAQTable
            faqs={faqData}
            addFn={FAQContainer.addFAQ}
            updateFn={FAQContainer.updateFAQ}
            deleteFn={FAQContainer.deleteFAQ}
            pageNumber={1}
            itemsPerPage={10}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Render FAQTable page 2, 5 items/page', () => {
    const tree = renderer.create(
        <FAQTable
            faqs={faqData}
            addFn={FAQContainer.addFAQ}
            updateFn={FAQContainer.updateFAQ}
            deleteFn={FAQContainer.deleteFAQ}
            pageNumber={2}
            itemsPerPage={5}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
