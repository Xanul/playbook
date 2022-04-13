// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)
  
  // Filter personalizado

  const myFilter = scores.filter((obj) => obj.name == 'A'|| obj.name == 'M' && obj.score > 80)
  console.log(myFilter)

  const myFilter2 = scores.filter((obj) => obj.score < 60)
  console.log(myFilter2)