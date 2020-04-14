import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByTestId } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Pagination allItems={100} activePage={1} maxPerPage={10} getOffset={() => {}} />, div);
  });
  it('renders correct number of pages', () => {
    const { container } = render(
      <Pagination allItems={100} activePage={0} maxPerPage={10} getOffset={() => {}} />,
    );
    const list = getByTestId(container, 'pagesList');
    const listElements = list.getElementsByTagName('li').length;
    expect(listElements).toBe(12);
  });
});
