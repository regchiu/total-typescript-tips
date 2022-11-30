// See: https://www.totaltypescript.com/tips/create-your-own-objectkeys-function-using-generics-and-the-keyof-operator

export const myObject = {
  a: 1,
  b: 2,
  c: 3
}

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj as object) as (keyof Obj)[]
}

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key])
})
