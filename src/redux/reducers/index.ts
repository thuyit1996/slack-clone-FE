import { combineReducers } from "redux"
import { AppReducer } from "@/App/App.reducer"
import { loginReducer } from "@/pages/Login/Login.reducer"
import { ProductListReducer } from "@/pages/Product/ProductList/ProductList.reducer"
import { productItemReducer } from "@/pages/Product/ProductItem/ProductItem.reducer"

export const appReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: ProductListReducer,
  productItem: productItemReducer
})

export const rootReducer = (state: any, action: any): any => {
  return appReducer(state, action)
}

export type RootState = ReturnType<typeof rootReducer>
