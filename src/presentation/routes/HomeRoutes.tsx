import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "@/presentation/guards/AuthenticatedGuard"
import { PATH } from "@/shared/constants/paths"
import Loading from "@/presentation/components/Loading/Loading"
const Home = lazy(() => import("@/presentation/pages/HomePage"))

export default function HomeRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  )
}
