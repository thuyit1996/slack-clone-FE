import Type from "../../type"
import { getApiController } from ".."
import { IResource } from "../../../../../shared/interfaces/common/resource"

const getAllChannel = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/sign_in`
})

export default { getAllChannel }
