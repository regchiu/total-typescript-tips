// See: https://www.totaltypescript.com/tips/understand-assignability-in-typescript

// This piece of code might look completely confusing to you.
type Name = string
type GoodName = VeryGoodName | 'Good Name'
type VeryGoodName = 'Reg'

const isGoodName = (name: GoodName) => {
  // Do something
}

isGoodName('Reg')

export type Result = Name extends GoodName ? true : false
//          ^?
export type Result1 = GoodName extends Name ? true : false
//          ^?
export type Result2 = VeryGoodName extends Name ? true : false
//          ^?
export type Result3 = VeryGoodName extends GoodName ? true : false
//          ^?


// To understand this, we need to understand assignability.
class Animal {
  isAnimal() {
    return true
  }
}

class Dog extends Animal {
  isDog() {
    return true
  }
}

class Labrador extends Dog {
  isLabrador() {
    return true
  }
}

const takeForWalk = (dog: Dog) => {
  // Do something
}

takeForWalk(new Animal()) // error

