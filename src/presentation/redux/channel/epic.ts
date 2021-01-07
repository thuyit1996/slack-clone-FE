import ChannelRepository from "@/data/repository/channel"
import { ofType } from "redux-observable"
import { of, Observable } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"
import * as channelTypes from "./action"

export const channelEpic = (
  action$: Observable<any>,
  state$: Observable<any>
) =>
  action$.pipe(
    ofType(channelTypes.GET_ALL_CHANNEL),
    switchMap((action) => {
      return new ChannelRepository().getAllChannel().pipe(
        map(res => channelTypes.getAllChannelSuccess(res.data)),
        catchError(error => of(channelTypes.getAllChannelFail(error)))
      )
    })
  )
