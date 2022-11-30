// See: https://www.totaltypescript.com/tips/make-accessing-objects-safer-by-enabling-nouncheckedindexedaccess-in-tsconfig

export const myObj: Record<string, string[]> = {}

if (!myObj.foo) {
  myObj.foo = []
}

myObj.foo.push('bar')
