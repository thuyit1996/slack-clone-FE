import Customer from "./customer"
import * as Channel from "./channel"

// export const getApiController = (storeView = 'jp') => storeView ? `rest/V1` : 'rest/V1';
export const getApiController = (storeView = "th"): string =>
  storeView ? `` : ""

export const SlackResource = {
  Customer,
  Channel
}
