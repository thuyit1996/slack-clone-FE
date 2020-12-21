export const INIT_APP = "INIT_APP"
export const INIT_APP_SUCCESS = "INIT_APP_SUCCESS"
export const INIT_APP_FAIL = "INIT_APP_FAIL"

export const initApp = () => ({
  type: INIT_APP
})

export const initAppSuccess = () => ({
  type: INIT_APP_SUCCESS
})

export const initAppFail = () => ({
  type: INIT_APP_FAIL
})
