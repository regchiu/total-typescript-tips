// See: https://www.totaltypescript.com/tips/derive-a-union-type-from-an-object

export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26
}

type FruitCounts = typeof fruitCounts


// type SingleFruitCount =
//   | {
//     apple: number
//   }
//   | {
//     banana: number
//   }
//   | {
//     pear: number
//   }

type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number
  }
}[keyof FruitCounts]

const singleFruitCount: NewSingleFruitCount = {
  banana: 12
}

