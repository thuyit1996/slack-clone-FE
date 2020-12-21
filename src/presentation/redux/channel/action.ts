export const GET_ALL_CHANNEL = "GET_ALL_CHANNEL"
export const GET_ALL_CHANNEL_SUCCESS = "GET_ALL_CHANNEL_SUCCESS"
export const GET_ALL_CHANNEL_FAIL = "GET_ALL_CHANNEL_FAIL"

export const getAllChannel = payload => ({
  type: GET_ALL_CHANNEL,
  payload
})

export const getAllChannelSuccess = payload => ({
  type: GET_ALL_CHANNEL_SUCCESS,
  payload
})

export const getAllChannelFail = payload => ({
  type: GET_ALL_CHANNEL_FAIL,
  payload
})
