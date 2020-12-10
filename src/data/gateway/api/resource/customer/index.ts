import Type from '../../type';
import { getApiController } from '..';
import { IResource } from '../../../../../shared/interfaces/common/resource';

const Login = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/sign_in`,
});

const Singout = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/sign_out`,
});

export default {
  Login,
  Singout,
};
