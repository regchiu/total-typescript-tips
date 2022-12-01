// See: https://www.totaltypescript.com/tips/assign-local-variables-to-default-generic-slots-to-dry-up-your-code-and-improve-performance

export type Obj = {
  a: 'a'
  a2: 'a2'
  a3: 'a3'
  b: 'b'
  b1: 'b1'
  b2: 'b2'
}

type ValuesOfKeysStartingWith<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K]
}[_ExtractedKeys]

type NewUnionA = ValuesOfKeysStartingWith<Obj>
//   ^?

type NewUnionB = ValuesOfKeysStartingWith<Obj, Extract<keyof Obj, `b${string}`>>
//   ^?

