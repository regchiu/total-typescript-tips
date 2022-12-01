// See: https://www.totaltypescript.com/tips/use-infer-in-combination-with-string-literals-to-manipulate-keys-of-objects

interface ApiData {
  'map:longitude': string
  'map:latitude': string
}

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K]
}

type RemoveMaps<T> = T extends `map:${infer U}` ? U : T

type DesiredShape = RemoveMapsFromObj<ApiData>
//   ^?
