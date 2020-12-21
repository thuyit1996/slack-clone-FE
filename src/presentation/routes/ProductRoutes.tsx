import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "../guards/AuthenticatedGuard"
import { PATH } from "@/shared/constants/paths"
import Loading from "@/presentation/components/Loading/Loading"

export default function ProductRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT}
        component={() => (
          <Suspense fallback={<Loading />}>
            {/* <ProductList /> */}
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCT + "/:idProduct"}
        component={() => (
          <Suspense fallback={<Loading />}>
            {/* <ProductItem /> */}
          </Suspense>
        )}
      />
    </Switch>
  )
}
