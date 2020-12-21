import Type from "../../type"
import { getApiController } from ".."
import { IResource } from "../../../../../shared/interfaces/common/resource"

export const getAllChannel = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/channel/get-all-channel`
})
