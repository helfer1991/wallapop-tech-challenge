import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export function useFavourites() {
    const context = useContext(FavouritesContext)
    return context;
}