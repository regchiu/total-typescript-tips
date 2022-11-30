// See: https://www.totaltypescript.com/tips/create-a-key-remover-function-which-can-process-any-generic-object

export const makeKeyRemover = <Key extends string>(key: Key[]) => <Obj>(obj: Obj): Omit<Obj, Key> => {
  return {} as any
}

const keyRemover = makeKeyRemover(['a', 'b'])

const newObject = keyRemover({ a: 1, b: 2, c: 3 })
