import { GlobalReducer } from './types'
declare global {
  interface GlobalReducerEvent {
    LOG_IN: {
      name: 'Reg'
    }
  }
}

export const userReducer: GlobalReducer<{ id: string }> = (
  state,
  event
) => {
  // event.type === 'LOG_IN'
  // event.type === 'ADD_TODO'
  return state
}
