export const searchHighlight = (searchParameter: string, text: string) => {
  const lowerCaseSearch = searchParameter.toLowerCase();

  if (!searchParameter) {
    return text;
  }

  return text.split(/(\s+)/).map((word, index) =>
    word.trim() ? (
      lowerCaseSearch && word.toLowerCase().includes(lowerCaseSearch) ? (
        <span key={index} style={{ fontWeight: "bold", fontStyle: "italic" }}>
          {word}
        </span>
      ) : (
        word
      )
    ) : (
      word
    )
  );
};
