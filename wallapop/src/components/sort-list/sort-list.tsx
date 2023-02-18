import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { SortModal } from "../sort-modal";

import { SortButton, SortButtonText } from "./styles";

type SortListProps = {

}

export const SortList: React.FC = () => {
    const [showSortModal, setShowSortModal] = useState<boolean>(false);
    const [filterCategory, setFilterCategory] = useState<string>('title');

    return (
        <>
            <SortButton onClick={() => setShowSortModal(!showSortModal)}>
                Sort by:
                <SortButtonText>
                {filterCategory}
            </SortButtonText>
            {showSortModal ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </SortButton>
            <SortModal setCategory={setFilterCategory} show={showSortModal} onClose={() => setShowSortModal(false)} />
      </>
    )
}