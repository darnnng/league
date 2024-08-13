import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { Modal } from "./../modalWindow";
import "@testing-library/jest-dom";
import { render } from "@/utils/tests";

describe("Modal", () => {
  const defaultProps = {
    title: "Test Modal",
    open: false,
    onClose: jest.fn()
  };

  const renderModal = (props = {}) => {
    render(
      <Modal {...defaultProps} {...props}>
        Content
      </Modal>
    );
  };

  it("should render when open is true", () => {
    renderModal({ open: true });
    const modalElement = screen.getByTestId("test-modal");
    expect(modalElement).toBeInTheDocument();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("should close when the close button is clicked", () => {
    const onClose = jest.fn();
    renderModal({ open: true, onClose });
    const closeButton = screen.getByTestId("test-close-button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close when clicking on overlay", () => {
    const onClose = jest.fn();
    renderModal({ open: true, onClose });
    const overlay = screen.getByTestId("test-modal").parentElement;
    fireEvent.click(overlay as HTMLElement);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not close when clicking inside container", () => {
    const onClose = jest.fn();
    renderModal({ open: true, onClose });
    const modalContainer = screen.getByTestId("test-modal");
    fireEvent.click(modalContainer);
    expect(onClose).not.toHaveBeenCalled();
  });
});
