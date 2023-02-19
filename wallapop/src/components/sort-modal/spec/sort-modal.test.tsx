import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SortModal } from '../sort-modal';

describe('SortModal', () => {
  const setCategoryMock = jest.fn();
  const onCloseMock = jest.fn();
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('renders nothing when "show" prop is false', () => {
    const { queryByTestId } = render(
      <SortModal setCategory={setCategoryMock} show={false} onClose={onCloseMock} />
    );
    expect(queryByTestId('sort-modal-container')).not.toBeInTheDocument();
  });
  
  it('renders the modal when "show" prop is true', () => {
    const { getByTestId } = render(
      <SortModal setCategory={setCategoryMock} show onClose={onCloseMock} />
    );
    expect(getByTestId('sort-modal-container')).toBeInTheDocument();
  });
  
  it('calls the "setCategory" function when a category button is clicked', () => {
    const { getByTestId } = render(
      <SortModal setCategory={setCategoryMock} show onClose={onCloseMock} />
    );
    fireEvent.click(getByTestId('sort-by-title-button'));
    expect(setCategoryMock).toHaveBeenCalledWith('title');
  });
  
  it('calls the "onClose" function when the modal container is clicked', () => {
    const { getByTestId } = render(
      <SortModal setCategory={setCategoryMock} show onClose={onCloseMock} />
    );
    fireEvent.click(getByTestId('sort-modal-container'));
    expect(onCloseMock).toHaveBeenCalled();
  });
  
  it('calls the "onClose" function when a category button is clicked', () => {
    const { getByTestId } = render(
      <SortModal setCategory={setCategoryMock} show onClose={onCloseMock} />
    );
    fireEvent.click(getByTestId('sort-by-email-button'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
