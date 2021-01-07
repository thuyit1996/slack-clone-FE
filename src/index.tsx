import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { configureStore } from "./presentation/redux/store"

import App from "./presentation/routes/routes"
import "antd/dist/antd.css"
import "./app.scss"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
