import ChannelRepository from "@/data/repository/channel"
import { ofType } from "redux-observable"
import { of, Observable } from "rxjs"
import { catchError, exhaustMap, mergeMap } from "rxjs/operators"
import * as channelTypes from "./action"

export const channelEpic = (
  action$: Observable<any>,
  state$: Observable<any>
) =>
  action$.pipe(
    ofType(channelTypes.GET_ALL_CHANNEL),
    exhaustMap(([action, state]) => {
      return new ChannelRepository().getAllChannel().pipe(
        mergeMap(res => {
          return of(channelTypes.getAllChannelSuccess(res.data))
        }),
        catchError(error => of())
      )
    })
  )
