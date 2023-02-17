import React, { useState, useCallback, useMemo } from "react";

import { Search } from "./styles";

import { debounce } from "lodash";

type SearchBarProps = {
    searchCategory?: string;
    setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchCategory, setSearchResult }) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const debounceHandleChange = useCallback((value: string) => {
        console.log('cenas');
    }, []);

    const cenas = useMemo(() => {
        return debounce(debounceHandleChange, 500);
    }, [debounceHandleChange])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchInput(e.target.value);
        cenas(e.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchResult(searchInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Search onChange={handleChange} type="search" name="search" aria-expanded="false" placeholder={`Search by ${searchCategory}`} value={searchInput} />
        </form>
    )
}