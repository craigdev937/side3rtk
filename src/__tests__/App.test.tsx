import { describe, it, expect } from "@rstest/core";
import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

describe("App component", () => {
    it("renders heading and image", () => {
        render(<App />);
        expect(screen.getByRole(
            "heading", { 
                name: "Quattro Auspicious Beasts"
            })
        ).toBeTruthy();
        const img = screen.getByAltText("Quattro Auspicious Beasts");
        expect(img).toBeTruthy();
        expect(img.getAttribute("src")).toBeTruthy();
    });
});



