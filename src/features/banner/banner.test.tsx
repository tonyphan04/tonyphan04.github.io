/**
 * @jest-environment jsdom
 */

//import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "./banner";

describe(Banner, () => {
  it("#projects is visible", () => {
    render(<Banner />);
    const button = screen.getByRole("button", { name: "View My Work" });
    fireEvent.click(button);
    expect(window.location.hash).toBe("#projects");
  });

  it("scroll to contact section when button is clicked", () => {
    render(<Banner />);
    const link = screen.getByRole("link", { name: "Contact Me" });
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "/contact");
  });

  // it("scroll successfully after clicking button", () => {
  //   const { getByTestId, getByText } = render(<Banner />);
  //   const button = getByText("View My Work");
  //   const projectsSection = getByTestId("projects");

  //   projectsSection.scrollIntoView = jest.fn();
  //   fireEvent.click(button);
  //   expect(projectsSection.scrollIntoView).toHaveBeenCalledWith({
  //     behavior: "smooth",
  //   });
  // });
});
