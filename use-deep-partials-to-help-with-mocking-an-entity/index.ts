// See: https://www.totaltypescript.com/tips/use-deep-partials-to-help-with-mocking-an-entity

type DeepPartial<Thing> = Thing extends () => void
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined

type DeepPartialArray<Thing> = Array<DeepPartial<Thing>>

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>
}

interface Post {
  id: string
  comments: { value: string }[]
  meta: {
    name: string
    description: string
  }
}

const post: DeepPartial<Post> = {
  id: '1',
  comments: [{}],
  meta: {}
}
