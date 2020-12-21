import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "@/shared/constants/paths"
import Loading from "@/presentation/components/Loading/Loading"

export default function LoginRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            {/* <Login /> */}
          </Suspense>
        )}
      />
    </Switch>
  )
}
