import { render } from "@testing-library/react";
import { searchHighlight } from "./../searchHighlight";

const renderHighlightedText = (searchParameter: string, text: string) =>
  render(<>{searchHighlight(searchParameter, text)}</>);

describe("searchHighlight", () => {
  it("renders text with highlighted word", () => {
    const { getByText } = renderHighlightedText(
      "test",
      "This is a test sentence."
    );

    expect(getByText("test")).toHaveStyle({
      fontWeight: "bold",
      fontStyle: "italic"
    });
  });

  it("renders text without highlights when search parameter is empty", () => {
    const { container } = renderHighlightedText("", "This is a test sentence.");
    expect(container).toHaveTextContent("This is a test sentence.");

    const highlightedElements = container.querySelectorAll("*");

    highlightedElements.forEach((element) => {
      expect(element).not.toHaveStyle({ fontWeight: "bold" });
      expect(element).not.toHaveStyle({ fontStyle: "italic" });
    });
  });
});
