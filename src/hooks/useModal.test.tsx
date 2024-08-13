import { renderHook, act } from "@testing-library/react";
import { modalService } from "services/modals";
import { useModal } from "./useModal";
import { ImageModalProps } from "components/compositions";

describe("useModal", () => {
  let openModalTest: jest.SpyInstance;
  let closeModalTest: jest.SpyInstance;

  beforeEach(() => {
    openModalTest = jest
      .spyOn(modalService, "openModal")
      .mockImplementation(() => "test-id");
    closeModalTest = jest
      .spyOn(modalService, "closeModal")
      .mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should open modal with correct arguments", () => {
    const mockProps: ImageModalProps = {
      url: "https://example.com/image.jpg",
      title: "Test Image"
    };
    const { result } = renderHook(() => useModal());

    const [handleOpenModal] = result.current;

    act(() => {
      handleOpenModal(mockProps);
    });

    expect(openModalTest).toHaveBeenCalledWith(expect.any(Function));
    expect(result.current[0]).not.toBeNull();
  });

  it("should close modal correctly", () => {
    const { result } = renderHook(() => useModal());
    const [handleOpenModal, handleCloseModal] = result.current;

    const mockProps: ImageModalProps = {
      url: "https://example.com/image.jpg",
      title: "Test Image"
    };

    act(() => {
      handleOpenModal(mockProps);
    });
    expect(result.current[0]).not.toBeNull();

    act(() => {
      handleCloseModal();
    });
    expect(closeModalTest).toHaveBeenCalledWith("test-id");
  });
});
