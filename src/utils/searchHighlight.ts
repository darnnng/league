export const searchHighlight = (searchParameter: string, text: string) => {
  // Проверяем, содержит ли searchParameter только буквы
  if (!/^[a-zA-Z]+$/.test(searchParameter)) return text;

  // Приводим параметры поиска и текст к нижнему регистру
  const lowerSearchParameter = searchParameter.toLowerCase();

  // Используем регулярное выражение для разделения текста на слова и знаки препинания
  return text
    .split(/(\s+|\b)/) // Разделяем по пробелам и границам слов, сохраняя разделители
    .map((word) =>
      word.toLowerCase().includes(lowerSearchParameter)
        ? `<em>${word}</em>`
        : word
    )
    .join(""); // Объединяем результат в строку
};
