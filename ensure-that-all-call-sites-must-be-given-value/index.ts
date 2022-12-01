// See: https://www.totaltypescript.com/tips/ensure-that-all-call-sites-must-be-given-value
interface UserInfo {
  name: string
  // And this adds a different behavior here. 
  // It's saying we need to pass the property role or we can pass undefined there. 
  // So even though technically this is undefined here, we still need to add role as undefined.
  role: 'admin' | undefined
}

export const createUser = (userInfo: UserInfo) => {
  // Do something
}

// Imagine these are all spread out over different files, 
// and I need to check who I need to make an admin and who I don't.
createUser({
  name: 'Matt',
  role: 'admin'
})

createUser({
  name: 'David',
  role: 'admin'
})

// And that means that I do get all of the inference and the auto completes that I'm looking for. 
// And it means that I can just go back later and just remove all of these undefined roles.
// So that's really useful. And it's sometimes even desirable to keep this type signature if you do want to allow passing of undefined, but you want to make it really visible to the user that they've done that.
// So again, this is a really nice little syntax switch that you can do moving from either "you don't need to pass this property" or "you do need to pass this property, but you can still pass undefined".
createUser({
  name: 'Laura',
  role: undefined
})

createUser({
  name: 'Andarist',
  role: undefined
})

createUser({
  name: 'Farzad',
  role: undefined
})

createUser({
  name: 'Jenny',
  role: undefined
})
