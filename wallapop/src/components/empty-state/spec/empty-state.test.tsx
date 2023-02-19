import React from "react";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "../empty-state";

describe("EmptyState", () => {
    beforeEach(() => {
        render(<EmptyState />);
    });

    it("renders the sad icon", () => {
        const icon = screen.getByTestId("icon-sad");

        expect(icon).toBeInTheDocument();
    });

    it("renders a description", () => {
        const description = screen.getByText("Your search had no results. Try again please!");

        expect(description).toBeInTheDocument();
    });
});
