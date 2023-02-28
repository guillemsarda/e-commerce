export default function capitalizeWords(str) {
  if (str === 'CPU' || str === 'OS' || str === 'RAM') return `${str}:`;
  let newStr = str[0].toUpperCase();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-continue
    if (i === 0) continue;
    if (str[i] === str[i].toUpperCase()) {
      newStr += ` ${str.slice(i)}:`;
      return newStr;
    }
    newStr += str[i];
  }
  return `${newStr}:`;
}
