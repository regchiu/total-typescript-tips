// See: https://www.totaltypescript.com/tips/use-declare-global-to-allow-types-to-cross-module-boundaries

export type GlobalReducer<TState> = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType,
    } & GlobalReducerEvent[EventType]
  }[keyof GlobalReducerEvent]
) => TState
