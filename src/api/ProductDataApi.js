/**
 * Cervinodata API documentation
 * <div style='margin: 2em 0;'> <p> Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>). </p> <h3>To use the Cervinodata API, you need all of the following:</h3> <p> <ol> <li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li> <li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li> <li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li> <li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li> <li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li> </ol> </p> <p> Note that limits apply for <a href='https://support.cervinodata.com/hc/articles/360014265139' target='_blank'>Free plan users</a>. </p> <p> If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>. </p> </div>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cervinodata.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* ProductData service.
* @module api/ProductDataApi
* @version 0.1.0
*/
export default class ProductDataApi {

    /**
    * Constructs a new ProductDataApi. 
    * @alias module:api/ProductDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth operation.
     * @callback module:api/ProductDataApi~getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonthCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return GA4 report per channel group per product name per organisation per property per month
     * GA4 report per channel group per product name per organisation per property per month
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {module:api/ProductDataApi~getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth(organisationUuids, callback) {
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ga4-report-per-channel-group-per-product-name-per-organisation-per-property-per-month/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}