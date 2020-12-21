import { initConfig } from "@/config"
import { ofType } from "redux-observable"
import { of, Observable } from "rxjs"
import { catchError, exhaustMap, mergeMap } from "rxjs/operators"
import * as generalType from "./action"

export const appEpic = (action$: Observable<any>, state$: Observable<any>) =>
  action$.pipe(
    ofType(generalType.INIT_APP),
    exhaustMap(([action, state]) => {
      return of(initConfig()).pipe(
        mergeMap(res => {
          return of(generalType.initAppSuccess())
        }),
        catchError(error => of())
      )
    })
  )
