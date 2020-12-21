import * as channelAction from "./action"

const initialState = {
  channel: []
}

export const ChannelReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case channelAction.GET_ALL_CHANNEL_SUCCESS:
      return {
        ...state,
        channel: payload.data
      }
    default:
      return state
  }
}
