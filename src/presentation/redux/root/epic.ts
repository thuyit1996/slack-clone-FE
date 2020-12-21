import { combineEpics } from "redux-observable"
import { channelEpic } from "../channel/epic"
import { appEpic } from "../general/epic"

const rootEpic: any = combineEpics(appEpic, channelEpic)

export default rootEpic
