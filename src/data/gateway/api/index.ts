import * as CONSTANTS from '../../../shared/constants';
import {
  API_METHOD,
  INIT_INTERVAL_RETRY_MS,
  MAX_RETRIES_API,
  STATUS_RETRY_API,
} from '../../../shared/constants';
import { ajax } from 'rxjs/ajax';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenType } from '../../constants';
import StorageGateway from '../storage';
import Type from './type';
import { IResource } from '../../../shared/interfaces/common/resource';
import ResponseModel from '../../models/response';
import { retryBackoff } from '../../helper/retryBackOff';

class ApiGateway {
  _configTimeout = 30000;

  _endpoint: string;

  _accessToken: string;

  _adminUsername: string;

  _adminPassword: string;

  _googleApiKey: string;

  _resource?: IResource;

  static createAPIConnection(settings: any): any {
    return new ApiGateway(settings);
  }

  constructor(settings: any) {
    const {
      endpoint,
      accessToken,
      headers,
      adminUsername,
      adminPassword,
      googleApiKey,
    } = settings;
    this._endpoint = endpoint;
    this._adminUsername = adminUsername;
    this._adminPassword = adminPassword;
    this._accessToken = accessToken;
    this._googleApiKey = googleApiKey;
  }

  getEndpoint = (resourceType: string): string => {
    if (resourceType === 'public') {
      return this._endpoint;
    }
    return this._endpoint;
  };

  getParam = (params: { [key: string]: string }): string => {
    let paramString = '';
    Object.keys(params).forEach((key, index) => {
      paramString += `${index === 0 ? '' : '&'}${key}=${params[key]}`;
    });
    return paramString;
  };

  callApiHandle = (resource: IResource, method?: API_METHOD, body?: any) => {
    const { Path } = resource;
    const endpoint = this.getEndpoint(resource.Type);
    const url = `${endpoint}${Path}`;
    return ajax({
      method,
      url,
      headers: this.headerConfig(),
      body,
      withCredentials: true,
    }).pipe(
      map(this._handleAjaxSuccess),
      catchError((error) => throwError(this.handleAjaxError(error))),
      retryBackoff({
        initialInterval: INIT_INTERVAL_RETRY_MS, // INFO: exponent (1,2,4,8)
        maxRetries: MAX_RETRIES_API, // INFO: max retry api is three time
        shouldRetry: (error) => {
          if (error.code) {
            // INFO: retry api when status code of server > 500
            return error.code >= STATUS_RETRY_API;
          }
          return false;
        },
      })
    );
  };

  doGetAjaxRequest = (resource: IResource): Observable<any> => {
    return this.callApiHandle(resource, API_METHOD.GET);
  };

  doPostAjaxRequest = (resource: IResource, body?: any): Observable<any> => {
    return this.callApiHandle(resource, API_METHOD.POST, body);
  };

  doPutAjaxRequest = (resource: IResource, body?: any): Observable<any> => {
    return this.callApiHandle(resource, API_METHOD.PUT, body);
  };

  doPatchAjaxRequest = (resource: IResource, body?: any): Observable<any> => {
    return this.callApiHandle(resource, API_METHOD.PATCH, body);
  };

  doDeleteAjaxRequest = (resource: IResource): Observable<any> => {
    return this.callApiHandle(resource, API_METHOD.DELETE);
  };

  headerConfig = (): any => {
    const headers: any = {};
    headers['Content-Type'] = 'application/json';
    return headers;
  };

  _handleAjaxSuccess = (
    response: any
  ): ResponseModel<any> | Observable<ResponseModel<any>> => {
    const { status } = response;
    if (status >= 200 && status < 300) {
      return ResponseModel.createSuccess(response.response);
    }
    return ResponseModel.createError(status, response.response);
  };

  handleAjaxError = (error: any): any => {
    let status = 0;
    let message = '';
    let params;
    if (error.response) {
      // server was received message, but response smt
      status = error.status;
      message = error.response.message;
      params = error.response.parameters;

      if (status >= 200 && status < 300) {
        return this._handleAjaxSuccess(error.response);
      }

      const rawDataText = error.response;
      if (rawDataText && typeof rawDataText === 'string') {
        try {
          const errorObj = JSON.parse(rawDataText);
          if (errorObj) {
            message = errorObj.MESSAGE;
          }
        } catch (err) {
          message = err.toString();
        }
      }
    } else {
      // smt went wrong
      status = error.status;
      message = CONSTANTS.netWorkErrorMessage;
    }
    return ResponseModel.createError(status, message, params);
  };

  _getTokenFromType = (type: string): any => {
    switch (type) {
      case Type.Customer:
        return this._getCustomerToken();
      case Type.Admin:
        return this._getAdminToken();
      default:
        return this._getCustomerToken();
    }
  };

  _getCustomerToken = (): any => {
    return StorageGateway.doGetString(TokenType.Customer);
  };

  _getAdminToken = (): any => {
    return StorageGateway.doGetString(TokenType.Admin);
    // return this._accessToken;
  };
}

export default ApiGateway;
