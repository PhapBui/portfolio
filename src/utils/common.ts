export const capitalizeString = (string: string) => {
  if (!string) return '';
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const getQuantilyColor = (quantily: number): string => {
  if (quantily >= 80) return 'green';
  if (quantily >= 40) return 'goldenrod';
  return 'red';
};
