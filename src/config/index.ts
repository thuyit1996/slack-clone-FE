import { IRemoteConfig } from "../shared/interfaces/common"

let configs: IRemoteConfig | undefined

export const initConfig = (): Promise<IRemoteConfig> => {
  return new Promise((resolve, reject) => {
    /**
     * Some data from remote config API place here
     */
    /**
     * Some data from remote config API place here
     */
    const config: IRemoteConfig = {
      endpoint: "http://localhost:8888",
      domain: "http://localhost:8888",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzMzMTQ3Y2ZjMTA5MTI5NGE3M2UyYSIsImVtYWlsIjoidGh1eUBnbWFpbC5jb20iLCJmdWxsTmFtZSI6Ik5ndXllbiBWYW4gVHVhbiIsInRleHRTZWNyZXQiOiJQZEJvTnJtQ0ZjZ2ZpVEJLamRQTlZJWjQiLCJpYXQiOjE2MDg1MzM0NTUsImV4cCI6MTYxMDc0Njc4ODQ1NX0.RkKfn8lghtGZUhSD-FEa6N1ccWKZl-iiIuOQopIzRJc",
      googleApiKey: "AIzaSyDe2Kk6i-VPLHmGq-0_RH7JYk1QlaxSYMsI",
      sitecoreApiKey: "7A3E0468-E733-4F81-AABE-2BC0E797E5E0"
    }
    configs = config
    if (configs) {
      resolve(config)
    } else {
      reject()
    }
  })
}

export const getBaseConfig = (): IRemoteConfig | undefined => {
  return configs
}
