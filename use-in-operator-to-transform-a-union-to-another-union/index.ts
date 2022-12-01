// See: https://www.totaltypescript.com/tips/use-in-operator-to-transform-a-union-to-another-union

export type Entity =
  | {
    type: 'user'
  }
  | {
    type: 'post'
  }
  | {
    type: 'comment'
  }

// We don't need to write this now.
type EntityWithId =
  | {
    type: 'user'
    userId: string
  }
  | {
    type: 'post'
    postId: string
  }
  | {
    type: 'comment'
    commentId: string
  }

type NewEntityWithId = {
  [EntityType in Entity['type']]: {
    type: EntityType
  } & Record<`${EntityType}Id`, string>
}[Entity['type']]


const commentResult: NewEntityWithId = {
  type: 'comment',
  commentId: '123'
}

const userResult: NewEntityWithId = {
  type: 'user',
  userId: '123'
}

const postResult: NewEntityWithId = {
  type: 'post',
  postId: '123'
}

