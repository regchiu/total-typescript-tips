// See: https://www.totaltypescript.com/tips/use-generics-to-dynamically-specify-the-number-and-type-of-arguments-to-functions

export type Event =
  | {
    type: 'LOG_IN'
    payload: {
      userId: string
    }
  }
  | {
    type: 'SIGN_OUT'
  }

const sendEvent = <Type extends Event['type']>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {
  // Do something
}

/**
 * Correct
 */
sendEvent('LOG_IN', {
  userId: '123'
})
sendEvent('SIGN_OUT')

/**
 * Error
 */
sendEvent('SIGN_OUT', {})
sendEvent('LOG_IN', {})
sendEvent('LOG_IN')
