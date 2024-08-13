export const searchHighlight = (searchParameter: string, text: string) => {
  const handleFindWord = (word: string) => {
    return word
      .toLocaleLowerCase()
      .includes(searchParameter.toLocaleLowerCase());
  };

  if (!/^[a-zA-Z]+$/.test(searchParameter)) {
    return text;
  }

  const words = text.split(/\b/);

  return words
    .map((word) => (handleFindWord(word) ? `<em><b>${word}</b></em>` : word))
    .join("");
};
