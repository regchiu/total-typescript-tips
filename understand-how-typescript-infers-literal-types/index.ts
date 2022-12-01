// See: https://www.totaltypescript.com/tips/understand-how-typescript-infers-literal-types

export const age = 31


export const name = 'Matt'

const tsPeople = ['Andarist', 'Titian', 'Devansh', 'Anurag'] as const

tsPeople[0] = 'Reg'

const moreTsPeople = {
  Andarist: 'Andarist',
  Titian: 'Titian',
  Devansh: 'Devansh',
  Anurag: 'Anurag'
} as const

moreTsPeople.Andarist = 'Reg'
