let students = [
  {
    name: 'Lucas',
    nota1: 7.4,
    nota2: 7.5,
  },

  {
    name: 'Evelyn',
    nota1: 6.4,
    nota2: 8.2,
  },

  {
    name: 'Carlos',
    nota1: 8.6,
    nota2: 4.2,
  },

  {
    name: 'Ana',
    nota1: 7.9,
    nota2: 4.4,
  },
]


function printMedia(student) {
  if((student.nota1 + student.nota2) / 2 >= 7) {
    alert(`
      A média do aluno(a) ${student.name} é ${((student.nota1 + student.nota2) / 2).toFixed(2)}
      Parabéns, você foi aprovado no concurso!
    `)

  } else {
    alert(`
      A média do aluno(a) ${student.name} é ${((student.nota1 + student.nota2) / 2).toFixed(2)}
      Você foi reprovado. Tente na proxima vez.
    `)
  }
  
}

for(let student of students) {
  printMedia(student)
}
