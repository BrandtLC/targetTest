const stringInverter = (string) => {
  let invertedString = '';
  for(let index = string.length - 1; index >= 0; index--) {
    invertedString += string[index];
  }
  return invertedString;
}

console.log('banana', stringInverter('banana'));
console.log('tubarão', stringInverter('tubarão'));
console.log('pneumoultramicroscopicossilicovulcanoconiótico', stringInverter('pneumoultramicroscopicossilicovulcanoconiótico'));