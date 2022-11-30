// See: https://www.totaltypescript.com/tips/turn-a-module-into-a-type

export type ActionModule = typeof import('./constants')
export type Action = ActionModule[keyof ActionModule]
