import ApiGateway from "@/data/gateway/api"
import { Observable } from "rxjs"
import { SlackResource } from "@/data/gateway/api/resource"
import ResponseModel from "@/data/models/response"
import getConfig from "@/data/setting"

export default class ChannelRepository {
  getAllChannel = (): Observable<ResponseModel<string>> => {
    const apiGateway = ApiGateway.createAPIConnection(getConfig())
    const channelResource = SlackResource.Channel.getAllChannel()
    return apiGateway.doGetAjaxRequest(channelResource)
  }
}
