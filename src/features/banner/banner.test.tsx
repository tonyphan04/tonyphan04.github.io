/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "./banner";

describe(Banner, () => {
  //   it("scroll to projects section when button is clicked", () => {
  //     render(<Banner />);
  //     const button = screen.getByRole("button", { name: "View My Work" });
  //     // Mock scrollIntoView
  //     const scrollIntoViewMock = jest.fn();
  //     window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

  //     fireEvent.click(button);

  //     expect(scrollIntoViewMock).toHaveBeenCalled();
  //   });

  it("scroll to contact section when button is clicked", () => {
    render(<Banner />);
    const link = screen.getByRole("link", { name: "Contact Me" });
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "/contact");
  });
});
