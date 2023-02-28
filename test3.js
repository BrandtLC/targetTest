import * as fs from "fs";

const jsonData = fs.readFileSync('./test3Data.json');
const dataParsed = JSON.parse(jsonData);


// Função que calcula a média
const valueAverage = (data) => {
  let sum = 0;
  data.forEach((current) => {
    sum += current.valor;
  })

  return sum / data.length;
}

//Função que busca menor valor
const lowestValue = (data) => {
  let lowest = null;
  data.forEach((current) => {
    if (lowest === null) {
      lowest = current.valor;
    }

    if (lowest > current.valor) {
      lowest = current.valor;
    }
  });

  return Math.round(lowest * 100) / 100;
}

//Função que busca maior valor
const hightestValue = (data) => {
  let hightest = null;
  data.forEach((current) => {
    if (hightest === null) {
      hightest = current.valor;
    }

    if (hightest < current.valor) {
      hightest = current.valor;
    }
  });

  return Math.round(hightest * 100) / 100;
}


// Função que calcula número de dias que valor esteve acima da média
const daysOverAverage = (data) => {
  let overAverageCount = 0;
  const average = valueAverage(data);

  data.forEach((current) => {
    if (current.valor > average) {
      overAverageCount++;
    }
  });

  return overAverageCount;
}


const result = {
  menorValor: lowestValue(dataParsed),
  maiorValor: hightestValue(dataParsed),
  diasAcimaDaMedia: daysOverAverage(dataParsed),
}

console.log(result);