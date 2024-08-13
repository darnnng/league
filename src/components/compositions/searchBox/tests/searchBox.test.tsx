import { screen, fireEvent, waitFor } from "@testing-library/react";
import { render } from "@/utils/tests";
import "@testing-library/jest-dom";
import { SearchBox } from "./../searchBox";
import { imagesService } from "@/services/images";

jest.mock("@/services/images", () => ({
  imagesService: {
    setSearchValue: jest.fn()
  }
}));

describe("SearchBox", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders search box", () => {
    render(<SearchBox />);
    expect(
      screen.getByPlaceholderText("Type image name..")
    ).toBeInTheDocument();
  });

  it("calls setSearchValue when input changes", async () => {
    render(<SearchBox />);

    const input = screen.getByPlaceholderText("Type image name..");
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(
      () => {
        expect(imagesService.setSearchValue).toHaveBeenCalledWith("test");
      },
      { timeout: 1200 }
    );
  });

  it("displays error message", async () => {
    render(<SearchBox />);

    fireEvent.change(screen.getByPlaceholderText("Type image name.."), {
      target: { value: "invalid-input-123" }
    });

    await waitFor(
      () => {
        expect(
          screen.getByText("Please use only a-z and A-Z")
        ).toBeInTheDocument();
      },
      { timeout: 1200 }
    );
  });
});
