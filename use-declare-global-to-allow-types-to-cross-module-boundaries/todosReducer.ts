import { GlobalReducer } from './types'

declare global {
  interface GlobalReducerEvent {
    ADD_TODO: { text: string }
  }
}

export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
  state,
  event
) => {
  // event.type = 'ADD_TODO'
  return state
}
