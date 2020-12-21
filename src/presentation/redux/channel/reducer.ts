import * as channelAction from "./action"

const initialState = {}

export default function ChannelReducer(state = initialState, action) {
  switch (action.type) {
    case channelAction.GET_ALL_CHANNEL_SUCCESS:
      return state
    default:
      return state
  }
}
