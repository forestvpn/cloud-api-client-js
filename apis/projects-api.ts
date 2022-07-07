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
import { CreateProjectRequest } from '../models';
import { Project } from '../models';
import { UpdateProjectRequest } from '../models';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new project
         * @param {CreateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProject: async (body?: CreateProjectRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/`;
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
         * @summary Project details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProject: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/{projectId}/`;
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
         * @summary Projects list
         * @param {string} [slug] 
         * @param {number} [per_page] 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProjects: async (slug?: string, per_page?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/`;
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

            if (slug !== undefined) {
                localVarQueryParameter['slug'] = slug;
            }

            if (per_page !== undefined) {
                localVarQueryParameter['per_page'] = per_page;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
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
         * @summary Update project
         * @param {UpdateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject: async (body?: UpdateProjectRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/projects/{projectId}/`;
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
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new project
         * @param {CreateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(body?: CreateProjectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Project>>> {
            const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(configuration).createProject(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Project details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Project>>> {
            const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(configuration).getProject(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Projects list
         * @param {string} [slug] 
         * @param {number} [per_page] 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProjects(slug?: string, per_page?: number, page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Project>>>> {
            const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(configuration).listProjects(slug, per_page, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update project
         * @param {UpdateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProject(body?: UpdateProjectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Project>>> {
            const localVarAxiosArgs = await ProjectsApiAxiosParamCreator(configuration).updateProject(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create a new project
         * @param {CreateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProject(body?: CreateProjectRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Project>> {
            return ProjectsApiFp(configuration).createProject(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Project details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProject(options?: AxiosRequestConfig): Promise<AxiosResponse<Project>> {
            return ProjectsApiFp(configuration).getProject(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Projects list
         * @param {string} [slug] 
         * @param {number} [per_page] 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProjects(slug?: string, per_page?: number, page?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Project>>> {
            return ProjectsApiFp(configuration).listProjects(slug, per_page, page, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update project
         * @param {UpdateProjectRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProject(body?: UpdateProjectRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Project>> {
            return ProjectsApiFp(configuration).updateProject(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export class ProjectsApi extends BaseAPI {
    /**
     * 
     * @summary Create a new project
     * @param {CreateProjectRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async createProject(body?: CreateProjectRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Project>> {
        return ProjectsApiFp(this.configuration).createProject(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Project details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async getProject(options?: AxiosRequestConfig) : Promise<AxiosResponse<Project>> {
        return ProjectsApiFp(this.configuration).getProject(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Projects list
     * @param {string} [slug] 
     * @param {number} [per_page] 
     * @param {number} [page] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async listProjects(slug?: string, per_page?: number, page?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Project>>> {
        return ProjectsApiFp(this.configuration).listProjects(slug, per_page, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update project
     * @param {UpdateProjectRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public async updateProject(body?: UpdateProjectRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Project>> {
        return ProjectsApiFp(this.configuration).updateProject(body, options).then((request) => request(this.axios, this.basePath));
    }
}