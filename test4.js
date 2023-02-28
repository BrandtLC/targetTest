const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

const calculateRepresentativeness = (data) => {
  const total = Object.values(data).reduce((tot, curr) => tot += curr, 0);

  let representativeness = {};

  Object.entries(data).forEach((curr) => {
    representativeness[curr[0]] = Math.round(curr[1] * 10000 / total) / 100;
  })

  return representativeness;
}

console.log('Percentual de representação de cada estado: ',calculateRepresentativeness(faturamento));