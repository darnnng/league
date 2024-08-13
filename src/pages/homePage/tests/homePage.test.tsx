import { imagesService } from "@/services/images";
import { render, RouterTestProvider } from "@/utils/tests";

import { screen, waitFor } from "@testing-library/react";

const mockData = [
  {
    id: "1",
    albumId: 1,
    title: "Image 1",
    url: "http://example.com/1",
    thumbnailUrl: "http://example.com/thumbnail/1"
  },
  {
    id: "2",
    albumId: 2,
    title: "Image 2",
    url: "http://example.com/2",
    thumbnailUrl: "http://example.com/thumbnail/2"
  },
  {
    id: "3",
    albumId: 3,
    title: "Image 3",
    url: "http://example.com/3",
    thumbnailUrl: "http://example.com/thumbnail/3"
  }
];

const mockFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockData)
});

global.fetch = mockFetch;

describe("Home page", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should render image cards", async () => {
    render(<RouterTestProvider />);
    await waitFor(() => {
      const images = screen.getAllByTestId("test-card");
      expect(images).toHaveLength(3);
    });
  });

  it("should display loader when loading", () => {
    imagesService.isLoading = true;
    render(<RouterTestProvider />);
    expect(screen.getByTestId("test-loader")).toBeInTheDocument();
  });

  it("should display not found message when no images are available", async () => {
    imagesService.isLoading = false;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([])
    });

    imagesService.isLoading = false;

    render(<RouterTestProvider />);

    await waitFor(() => {
      expect(
        screen.getByText("Nothing matches your request")
      ).toBeInTheDocument();
    });
  });
});
