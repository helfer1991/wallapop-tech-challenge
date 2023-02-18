import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../search-bar';

describe('SearchBar', () => {
  it('should render correctly with placeholder text', () => {
    const { getByPlaceholderText } = render(<SearchBar searchCategory="title" setSearchResult={() => {}} />);
    const searchInput = getByPlaceholderText('Search by title');
    expect(searchInput).toBeInTheDocument();
  });

  it('should update search input value when user types in the input field', () => {
    const setSearchResult = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar searchCategory="name" setSearchResult={setSearchResult} />);
    const searchInput = getByPlaceholderText('Search by name');
    const inputValue = 'search value';

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(searchInput.value).toBe(inputValue);
  });

  it('should debounce search when user types in the input field', () => {
    jest.useFakeTimers();
    const setSearchResult = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar searchCategory="title" setSearchResult={setSearchResult} />);
    const searchInput = getByPlaceholderText('Search by title');
    const inputValue = 'search value';

    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(setSearchResult).not.toHaveBeenCalled();

    jest.advanceTimersByTime(600);

    expect(setSearchResult).toHaveBeenCalledWith(inputValue);
  });

  it('should update search result when form is submitted', () => {
    const setSearchResult = jest.fn();
    const { getByPlaceholderText, getByRole } = render(<SearchBar searchCategory="title" setSearchResult={setSearchResult} />);
    const searchInput = getByPlaceholderText('Search by title');
    const form = getByRole('searchbox');
    const inputValue = 'search value';

    fireEvent.change(searchInput, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(setSearchResult).toHaveBeenCalledWith(inputValue);
  });
});
