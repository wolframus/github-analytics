export function getRandomColor(colors: Array<string>) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
