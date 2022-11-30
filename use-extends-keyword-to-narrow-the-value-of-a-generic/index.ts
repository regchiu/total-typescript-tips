// See: https://www.totaltypescript.com/tips/use-extends-keyword-to-narrow-the-value-of-a-generic

export const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any
}

const obj = {
  foo: {
    a: true,
    b: 1
  },
  bar: {
    c: 'cool',
    d: 2
  }
}

const result = getDeepValue(obj, 'foo', 'b')
