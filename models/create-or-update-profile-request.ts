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
/**
 * 
 * @export
 * @interface CreateOrUpdateProfileRequest
 */
export interface CreateOrUpdateProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateProfileRequest
     */
    external_key?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateOrUpdateProfileRequest
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateProfileRequest
     */
    status?: CreateOrUpdateProfileRequestStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOrUpdateProfileRequestStatusEnum {
    Active = 'active',
    Suspended = 'suspended'
}

