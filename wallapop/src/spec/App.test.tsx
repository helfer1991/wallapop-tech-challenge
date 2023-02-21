import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../App';
import { FavouritesContextProvider } from '../context/FavouritesContext';


describe('App', () => {
    beforeEach(() => {
        render(<FavouritesContextProvider><App /></FavouritesContextProvider>)
      })
    it('renders header', () => {
        expect(screen.getByTestId('header')).toBeInTheDocument();

    });

    it('renders items-list-manager', async () => {
        await waitFor(() => expect(screen.getByTestId('items-list-manager')).toBeInTheDocument());
    });

    it('renders footer', () => {
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
})  ;
