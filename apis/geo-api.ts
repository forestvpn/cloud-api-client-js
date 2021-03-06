/* tslint:disable */
/* eslint-disable */
/**
 * ForestVPN Cloud API
 * ForestVPN Cloud - it's a Google Cloud but for VPN apps. Ready to use VPN Cloud Platform minimizes efforts to build fast, secure, and modern VPN apps. 
 *
 * OpenAPI spec version: 2.0
 * Contact: support@forestvpn.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Location } from '../models';
/**
 * GeoApi - axios parameter creator
 * @export
 */
export const GeoApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Location list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocations: async (X_Project_Id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling listLocations.');
            }
            const localVarPath = `/locations/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiTokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-TOKEN")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-TOKEN"] = localVarApiKeyValue;
            }

            // authentication BearerTokenAuth required

            if (X_Project_Id !== undefined && X_Project_Id !== null) {
                localVarHeaderParameter['X-Project-Id'] = String(X_Project_Id);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GeoApi - functional programming interface
 * @export
 */
export const GeoApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Location list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listLocations(X_Project_Id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Location>>>> {
            const localVarAxiosArgs = await GeoApiAxiosParamCreator(configuration).listLocations(X_Project_Id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GeoApi - factory interface
 * @export
 */
export const GeoApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Location list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listLocations(X_Project_Id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Location>>> {
            return GeoApiFp(configuration).listLocations(X_Project_Id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GeoApi - object-oriented interface
 * @export
 * @class GeoApi
 * @extends {BaseAPI}
 */
export class GeoApi extends BaseAPI {
    /**
     * 
     * @summary Location list
     * @param {string} X_Project_Id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeoApi
     */
    public async listLocations(X_Project_Id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Location>>> {
        return GeoApiFp(this.configuration).listLocations(X_Project_Id, options).then((request) => request(this.axios, this.basePath));
    }
}
