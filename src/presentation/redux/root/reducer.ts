import { combineReducers } from "redux"
import ChannelReducer from "../channel/reducer"

export const appReducer = combineReducers({
  ChannelReducer
})

export const rootReducer = (state: any, action: any): any => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>
