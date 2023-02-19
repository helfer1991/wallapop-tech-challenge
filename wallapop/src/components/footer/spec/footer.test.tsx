import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

describe("Footer component", () => {
    beforeEach(() => {
        render(<Footer />);
    })

    it("renders Wallapop image", () => {
        const imageElement = screen.getByAltText("wallapop-image-footer");
        expect(imageElement).toBeInTheDocument();
    });

    it("renders 'Made by Helder with' text", () => {
        const textElement = screen.getByText("Made by Helder with");
        expect(textElement).toBeInTheDocument();
    });

    it("renders a heart icon", () => {
        const heartIcon = screen.getByTestId("icon-heart-full");
        expect(heartIcon).toBeInTheDocument();
    });
});
