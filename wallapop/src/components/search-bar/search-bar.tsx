import React, { useState, useMemo } from "react";

import { Search } from "./styles";

import { debounce } from "lodash";

type SearchBarProps = {
    searchCategory?: string;
    setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchCategory, setSearchResult }) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const search = (value: string) => {
        setSearchResult(value);
    }

    const debouncedSearch = useMemo(() => debounce(search, 500), []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setSearchInput(event.target.value);
        debouncedSearch(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchResult(searchInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Search data-testid="searchbox" onChange={handleChange} type="search" name="search" aria-expanded="false" placeholder={`Search by ${searchCategory}`} value={searchInput} />
        </form>
    )
}