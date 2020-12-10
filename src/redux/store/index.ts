import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware } from "redux-observable"
import rootEpic from "../epics"
import { rootReducer } from "../reducers/index"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

export const configureStore = (): any => {
  const middlewares: any = [epicMiddleware]

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), composeEnhancers())
  )

  epicMiddleware.run(rootEpic)

  return store
}
