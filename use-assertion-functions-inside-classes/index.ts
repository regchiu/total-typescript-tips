// See: https://www.totaltypescript.com/tips/use-assertion-functions-inside-classes

const createPost = (id: string, title: string) => {
  console.log(id, title)
}

export class SDK {
  constructor(public loggedInUserId?: string) { }
  createPost(title: string) {
    this.assertUserIsLoggedIn()

    createPost(this.loggedInUserId, title)
  }

  assertUserIsLoggedIn(): asserts this is this & {
    loggedInUserId: string
  } {
    if (!this.loggedInUserId) {
      throw new Error('User is not logged in')
    }
  }
}
