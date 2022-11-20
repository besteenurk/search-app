import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import SearchComponent from './components/search-component/search-component';
import MockData from './mock-data/mock-data.json';

test('find search input', () => {
    render(<SearchComponent data={MockData}/>);
    const linkElement = screen.getByTestId('artist-search-input');
    expect(linkElement).toBeInTheDocument();
});

describe('Input value', () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<SearchComponent data={MockData}/>);

        const searchInput = queryByPlaceholderText('Search artist/entry position');

        fireEvent.change(searchInput, {target: {value: 'Adele'}});

        expect(searchInput.value).toBe('Adele');
    })
})

describe('Input value', () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<SearchComponent data={MockData}/>);

        const searchInput = queryByPlaceholderText('Search artist/entry position');

        fireEvent.change(searchInput, {target: {value: 'taylor'}});
        const value = MockData.filter((mock) => mock.name.toLowerCase().match(searchInput.value)).map((value) => value.name);

        const filterArea = screen.getByTestId('searched-name-filter-area');
        // expect(MockData.filter((mock) => mock.name.toLowerCase().match(searchInput))).toBe('sas sd');
        expect(filterArea).toHaveDisplayValue(value)
    })
})

describe('Input value with num', () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<SearchComponent data={MockData}/>);

        const searchInput = queryByPlaceholderText('Search artist/entry position');

        fireEvent.change(searchInput, {target: {value: 133}});
        const value = MockData.filter((mock) => mock.firstEntryPosition.toLowerCase().match(searchInput.value));

        console.log(value[0].firstEntryPosition)
        const filterAreas = screen.getByTestId(`searched-position-filter-area-${value[0].firstEntryPosition}`);
        // console.log(screen.getByTestId('searched-position-filter-area'))
        // expect(MockData.filter((mock) => mock.name.toLowerCase().match(searchInput))).toBe('sas sd');
        expect(filterAreas).toBeInTheDocument();
    })
})

describe('Input value with **', () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render(<SearchComponent data={MockData}/>);

        const searchInput = queryByPlaceholderText('Search artist/entry position');

        fireEvent.change(searchInput, {target: {value: '*'}});
        const value = MockData.filter((mock) => mock.name.toLowerCase().match(searchInput.value))
            .map((val) => val.name.match('^[a-zA-Z0-9 ]*$') != null ? val.name : '');

        const filterArea = screen.getByTestId('searched-name-filter-area');
        // expect(MockData.filter((mock) => mock.name.toLowerCase().match(searchInput))).toBe('sas sd');
        expect(filterArea).toHaveDisplayValue(value)
    })
})

