// See: https://www.totaltypescript.com/tips/throw-detailed-error-messages-for-type-checks

type CheckBadArgs<Arg> = Arg extends any[] ? 'You cannot compare two arrays using deepEqualCompare' : Arg

export const deepEqualCompare = <Arg>(a: CheckBadArgs<Arg>, b: CheckBadArgs<Arg>): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    throw new Error('You cannot compare two arrays using deepEqualCompare')
  }
  return a === b
}

deepEqualCompare(1, 1)
deepEqualCompare([''], ['a'])
