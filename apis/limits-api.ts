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
import { CreateOrUpdateDataUsageLimitRequest } from '../models';
import { DataUsageLimit } from '../models';
/**
 * LimitsApi - axios parameter creator
 * @export
 */
export const LimitsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create data usage limit
         * @param {string} X_Project_Id 
         * @param {CreateOrUpdateDataUsageLimitRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDataUsageLimit: async (X_Project_Id: string, body?: CreateOrUpdateDataUsageLimitRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling createDataUsageLimit.');
            }
            const localVarPath = `/limits/data-usage/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete data usage limit
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDataUsageLimit: async (X_Project_Id: string, limitId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling deleteDataUsageLimit.');
            }
            // verify required parameter 'limitId' is not null or undefined
            if (limitId === null || limitId === undefined) {
                throw new RequiredError('limitId','Required parameter limitId was null or undefined when calling deleteDataUsageLimit.');
            }
            const localVarPath = `/limits/data-usage/{limitId}/`
                .replace(`{${"limitId"}}`, encodeURIComponent(String(limitId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * 
         * @summary Data usage limit details
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDataUsageLimit: async (X_Project_Id: string, limitId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling getDataUsageLimit.');
            }
            // verify required parameter 'limitId' is not null or undefined
            if (limitId === null || limitId === undefined) {
                throw new RequiredError('limitId','Required parameter limitId was null or undefined when calling getDataUsageLimit.');
            }
            const localVarPath = `/limits/data-usage/{limitId}/`
                .replace(`{${"limitId"}}`, encodeURIComponent(String(limitId)));
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
        /**
         * 
         * @summary Data usage limit list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDataUsageLimits: async (X_Project_Id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling listDataUsageLimits.');
            }
            const localVarPath = `/limits/data-usage/`;
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
        /**
         * 
         * @summary Partial update profile details
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partialUpdateDataUsageLimit: async (body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling partialUpdateDataUsageLimit.');
            }
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling partialUpdateDataUsageLimit.');
            }
            // verify required parameter 'limitId' is not null or undefined
            if (limitId === null || limitId === undefined) {
                throw new RequiredError('limitId','Required parameter limitId was null or undefined when calling partialUpdateDataUsageLimit.');
            }
            const localVarPath = `/limits/data-usage/{limitId}/`
                .replace(`{${"limitId"}}`, encodeURIComponent(String(limitId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update data usage limit
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDataUsageLimit: async (body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateDataUsageLimit.');
            }
            // verify required parameter 'X_Project_Id' is not null or undefined
            if (X_Project_Id === null || X_Project_Id === undefined) {
                throw new RequiredError('X_Project_Id','Required parameter X_Project_Id was null or undefined when calling updateDataUsageLimit.');
            }
            // verify required parameter 'limitId' is not null or undefined
            if (limitId === null || limitId === undefined) {
                throw new RequiredError('limitId','Required parameter limitId was null or undefined when calling updateDataUsageLimit.');
            }
            const localVarPath = `/limits/data-usage/{limitId}/`
                .replace(`{${"limitId"}}`, encodeURIComponent(String(limitId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LimitsApi - functional programming interface
 * @export
 */
export const LimitsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create data usage limit
         * @param {string} X_Project_Id 
         * @param {CreateOrUpdateDataUsageLimitRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDataUsageLimit(X_Project_Id: string, body?: CreateOrUpdateDataUsageLimitRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DataUsageLimit>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).createDataUsageLimit(X_Project_Id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete data usage limit
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).deleteDataUsageLimit(X_Project_Id, limitId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Data usage limit details
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DataUsageLimit>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).getDataUsageLimit(X_Project_Id, limitId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Data usage limit list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDataUsageLimits(X_Project_Id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<DataUsageLimit>>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).listDataUsageLimits(X_Project_Id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Partial update profile details
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partialUpdateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DataUsageLimit>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).partialUpdateDataUsageLimit(body, X_Project_Id, limitId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update data usage limit
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DataUsageLimit>>> {
            const localVarAxiosArgs = await LimitsApiAxiosParamCreator(configuration).updateDataUsageLimit(body, X_Project_Id, limitId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LimitsApi - factory interface
 * @export
 */
export const LimitsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create data usage limit
         * @param {string} X_Project_Id 
         * @param {CreateOrUpdateDataUsageLimitRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDataUsageLimit(X_Project_Id: string, body?: CreateOrUpdateDataUsageLimitRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<DataUsageLimit>> {
            return LimitsApiFp(configuration).createDataUsageLimit(X_Project_Id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete data usage limit
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return LimitsApiFp(configuration).deleteDataUsageLimit(X_Project_Id, limitId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Data usage limit details
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DataUsageLimit>> {
            return LimitsApiFp(configuration).getDataUsageLimit(X_Project_Id, limitId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Data usage limit list
         * @param {string} X_Project_Id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDataUsageLimits(X_Project_Id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DataUsageLimit>>> {
            return LimitsApiFp(configuration).listDataUsageLimits(X_Project_Id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Partial update profile details
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partialUpdateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DataUsageLimit>> {
            return LimitsApiFp(configuration).partialUpdateDataUsageLimit(body, X_Project_Id, limitId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update data usage limit
         * @param {CreateOrUpdateDataUsageLimitRequest} body 
         * @param {string} X_Project_Id 
         * @param {string} limitId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DataUsageLimit>> {
            return LimitsApiFp(configuration).updateDataUsageLimit(body, X_Project_Id, limitId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LimitsApi - object-oriented interface
 * @export
 * @class LimitsApi
 * @extends {BaseAPI}
 */
export class LimitsApi extends BaseAPI {
    /**
     * 
     * @summary Create data usage limit
     * @param {string} X_Project_Id 
     * @param {CreateOrUpdateDataUsageLimitRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async createDataUsageLimit(X_Project_Id: string, body?: CreateOrUpdateDataUsageLimitRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<DataUsageLimit>> {
        return LimitsApiFp(this.configuration).createDataUsageLimit(X_Project_Id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete data usage limit
     * @param {string} X_Project_Id 
     * @param {string} limitId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async deleteDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return LimitsApiFp(this.configuration).deleteDataUsageLimit(X_Project_Id, limitId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Data usage limit details
     * @param {string} X_Project_Id 
     * @param {string} limitId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async getDataUsageLimit(X_Project_Id: string, limitId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DataUsageLimit>> {
        return LimitsApiFp(this.configuration).getDataUsageLimit(X_Project_Id, limitId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Data usage limit list
     * @param {string} X_Project_Id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async listDataUsageLimits(X_Project_Id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<DataUsageLimit>>> {
        return LimitsApiFp(this.configuration).listDataUsageLimits(X_Project_Id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Partial update profile details
     * @param {CreateOrUpdateDataUsageLimitRequest} body 
     * @param {string} X_Project_Id 
     * @param {string} limitId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async partialUpdateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DataUsageLimit>> {
        return LimitsApiFp(this.configuration).partialUpdateDataUsageLimit(body, X_Project_Id, limitId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update data usage limit
     * @param {CreateOrUpdateDataUsageLimitRequest} body 
     * @param {string} X_Project_Id 
     * @param {string} limitId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LimitsApi
     */
    public async updateDataUsageLimit(body: CreateOrUpdateDataUsageLimitRequest, X_Project_Id: string, limitId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DataUsageLimit>> {
        return LimitsApiFp(this.configuration).updateDataUsageLimit(body, X_Project_Id, limitId, options).then((request) => request(this.axios, this.basePath));
    }
}
