import { screen, waitFor } from "@testing-library/react";
import { ImageModal } from "../imageModal";
import { render } from "@/utils/tests";

describe("Image modal", () => {
  const url = "https://example.com/image.jpg";
  const title = "Test Image";
  const mockImage = {
    onload: () => {},
    onerror: () => {},
    src: ""
  };

  beforeEach(() => {
    window.Image = jest
      .fn()
      .mockImplementation(() => mockImage as unknown as HTMLImageElement);
  });

  it("should display loader while image is loading", () => {
    render(<ImageModal url={url} title={title} onClose={() => {}} />);
    expect(screen.getByTestId("test-loader")).toBeInTheDocument();
  });

  it("should display image when image is loaded", async () => {
    render(<ImageModal url={url} title={title} onClose={() => {}} />);

    mockImage.onload();
    await waitFor(() => {
      expect(screen.getByAltText(title)).toHaveAttribute("src", url);
    });
  });
});
