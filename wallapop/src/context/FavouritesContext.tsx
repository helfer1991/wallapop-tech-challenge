import React, { createContext, useState } from 'react';

type FavouritesProviderProps = {
    children: React.ReactNode;
}

type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}
export type FavouritesContextType = {
    favourites: Array<Item>;
    addToFavourites: (item: Item) => void;
    removeFromFavourites: (item: Item) => void;
    isItemFavourite: (item: Item) => boolean;
}

export const FavouritesContext = createContext({} as FavouritesContextType);

export function FavouritesContextProvider({ children }: FavouritesProviderProps) {
    const [favourites, setFavourites] = useState<Array<Item>>([]);

    const addToFavourites = (item: Item) => {
        setFavourites(prevFavourites => ([...prevFavourites, item]));
    }

    const removeFromFavourites = (item: Item) => {
        const index = favourites.indexOf(item);
        setFavourites([...favourites].filter(favourite => favourite !== item));
    }

    const isItemFavourite = (item: Item) => {
        return favourites.includes(item);
    }

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isItemFavourite }}>
            {children}
        </FavouritesContext.Provider>
    )
}