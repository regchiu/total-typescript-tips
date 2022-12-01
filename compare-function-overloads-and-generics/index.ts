// See: https://www.totaltypescript.com/tips/compare-function-overloads-and-generics

export function returnWhatIPassIn<TInput>(input: TInput): TInput {
  return input
}

const result = returnWhatIPassIn(true)
//    ^?
const result2 = returnWhatIPassIn('Hello')
//    ^?
const result3 = returnWhatIPassIn(123)
//    ^?
