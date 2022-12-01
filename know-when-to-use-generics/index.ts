// See: https://www.totaltypescript.com/tips/know-when-to-use-generics

interface Animal {
  name: string
}

interface Human {
  firstName: string
  lastName: string
}

export const getDisplayName = <TItem extends Animal | Human>(item: TItem):
  TItem extends Human
  ? { humanName: string }
  : { animalName: string } => {
  if ('name' in item) {
    return {
      animalName: item.name
    } as any
  } else {
    return {
      humanName: item.firstName + item.lastName
    } as any
  }
}

const result = getDisplayName({
  //  ^?
  name: 'Patch'
})

const result2 = getDisplayName({
  //  ^?
  firstName: 'string',
  lastName: 'string'
})
