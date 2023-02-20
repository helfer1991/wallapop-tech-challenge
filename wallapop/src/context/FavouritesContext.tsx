import React, { createContext, useReducer } from 'react';
import { Item } from '../components/items-list/items-list';

type FavouritesProviderProps = {
  children: React.ReactNode;
};

type FavouritesState = {
  favourites: Array<Item>;
};

type FavouritesAction =
  | { type: 'ADD_TO_FAVOURITES'; payload: { item: Item } }
  | { type: 'REMOVE_FROM_FAVOURITES'; payload: { item: Item } };

const initialState: FavouritesState = { favourites: [] };

const FavouritesReducer = (
  state: FavouritesState,
  action: FavouritesAction
): FavouritesState => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      return { ...state, favourites: [...state.favourites, action.payload.item] };
    case 'REMOVE_FROM_FAVOURITES':
      const index = state.favourites.indexOf(action.payload.item);
      if (index > -1) {
        return {
          ...state,
          favourites: [
            ...state.favourites.slice(0, index),
            ...state.favourites.slice(index + 1),
          ],
        };
      }
      return state;
    default:
      return state;
  }
};

export type FavouritesContextType = {
  favourites: Array<Item>;
  addToFavourites: (item: Item) => void;
  removeFromFavourites: (item: Item) => void;
  isItemFavourite: (item: Item) => boolean;
};

export const FavouritesContext = createContext({} as FavouritesContextType);

export function FavouritesContextProvider({ children }: FavouritesProviderProps) {
  const [state, dispatch] = useReducer(FavouritesReducer, initialState);

  const addToFavourites = (item: Item) => {
    dispatch({ type: 'ADD_TO_FAVOURITES', payload: { item } });
  };

  const removeFromFavourites = (item: Item) => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: { item } });
  };

  const isItemFavourite = (item: Item) => {
    return state.favourites.includes(item);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites: state.favourites, addToFavourites, removeFromFavourites, isItemFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
