export const capilizeLetter = (paragraph: string) => {
  if (!paragraph) return;
  const wordArr = paragraph.split(' ');
  return wordArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};
