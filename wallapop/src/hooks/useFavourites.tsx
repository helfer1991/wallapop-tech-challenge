import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export const useFavourites = () => {
    const context = useContext(FavouritesContext)
    return context;
}