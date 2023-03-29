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
* AnalyticsDataGoals service.
* @module api/AnalyticsDataGoalsApi
* @version 0.1.0
*/
export default class AnalyticsDataGoalsApi {

    /**
    * Constructs a new AnalyticsDataGoalsApi. 
    * @alias module:api/AnalyticsDataGoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAnalyticsGoalReportPerCampaignPerDay operation.
     * @callback module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return analytics goal report per campaign per day by organisation
     * Analytics goal report per campaign per day by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAnalyticsGoalReportPerCampaignPerDay(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAnalyticsGoalReportPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/analytics-goal-report-per-campaign-per-day/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsGoalReportPerChannelGroupPerDay operation.
     * @callback module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerChannelGroupPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return analytics goal report per channel group per day by organisation
     * Analytics goal report per channel group per day by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerChannelGroupPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAnalyticsGoalReportPerChannelGroupPerDay(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAnalyticsGoalReportPerChannelGroupPerDay");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/analytics-goal-report-per-channel-group-per-day/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsGoalReportPerDevicePerDay operation.
     * @callback module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerDevicePerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return analytics goal report per device per day by organisation
     * Analytics goal report per device per day by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerDevicePerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAnalyticsGoalReportPerDevicePerDay(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAnalyticsGoalReportPerDevicePerDay");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/analytics-goal-report-per-device-per-day/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsGoalReportPerSourceMediumPerDay operation.
     * @callback module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerSourceMediumPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return analytics goal report per source medium per day by organisation
     * Analytics goal report per source medium per day by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AnalyticsDataGoalsApi~getAnalyticsGoalReportPerSourceMediumPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAnalyticsGoalReportPerSourceMediumPerDay(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAnalyticsGoalReportPerSourceMediumPerDay");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/analytics-goal-report-per-source-medium-per-day/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
