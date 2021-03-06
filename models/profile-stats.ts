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
 * @interface ProfileStats
 */
export interface ProfileStats {
    /**
     * 
     * @type {string}
     * @memberof ProfileStats
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStats
     */
    connections: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStats
     */
    received_bytes: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStats
     */
    transmitted_bytes: number;
    /**
     * 
     * @type {Date}
     * @memberof ProfileStats
     */
    date: Date;
}
