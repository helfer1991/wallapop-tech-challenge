import React, { useState } from "react";

import { Favourites } from "../favourites";
import { Container, Logo, FavouritesButton } from "./styles";

import type { Item } from "../items-list/items-list";

type FavouritesProps = {
    favourites: Array<Item>;
}

export const Header: React.FC<FavouritesProps> = ({ favourites }) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Container>
            <Logo src="https://mir-s3-cdn-cf.behance.net/projects/404/a009a0150534249.Y3JvcCw4MDgsNjMyLDAsMA.png" loading="lazy" />
            <FavouritesButton onClick={() => setShow(!show)}>Favourites</FavouritesButton>
            <Favourites show={show} onClose={() => setShow(false)} items={favourites} />
        </Container>
    )
}