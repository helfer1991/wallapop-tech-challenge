import React, { useState } from "react";

import { Favourites } from "../favourites";
import { Container, Logo, FavouritesButton } from "./styles";

export const Header: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <Container>
            <Logo alt="wallapop-logo" src="https://mir-s3-cdn-cf.behance.net/projects/404/a009a0150534249.Y3JvcCw4MDgsNjMyLDAsMA.png" loading="lazy" />
            <FavouritesButton onClick={() => setShow(!show)}>Favourites</FavouritesButton>
            <Favourites show={show} onClose={() => setShow(false)} />
        </Container>
    )
}