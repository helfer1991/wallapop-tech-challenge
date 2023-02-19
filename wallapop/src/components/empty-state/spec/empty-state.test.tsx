import React from "react";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "../empty-state";

describe("EmptyState", () => {
    describe('renders an Empty State component with an icon', () => {
        beforeEach(() => {
            render(<EmptyState description="some description"/>);
        });

        it("renders the sad icon", () => {
            const icon = screen.getByTestId("icon-sad");
    
            expect(icon).toBeInTheDocument();
        });
    
        it("renders a description", () => {
            const description = screen.getByText("some description");
    
            expect(description).toBeInTheDocument();
        });
    });

    describe('renders an Empty State component with an icon', () => {
        beforeEach(() => {
            render(<EmptyState hasIcon={false} description="some description"/>);
        });

        it("renders the sad icon", () => {
            const icon = screen.queryByTestId("icon-sad");
    
            expect(icon).not.toBeInTheDocument();
        });
    
        it("renders a description", () => {
            const description = screen.getByText("some description");
    
            expect(description).toBeInTheDocument();
        });
    })


});
